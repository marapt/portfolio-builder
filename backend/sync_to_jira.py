#!/usr/bin/env python3
import yaml
import httpx
import asyncio
import os
import logging
import subprocess
from pathlib import Path

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Configuration
BASE_DIR = Path(__file__).parent.parent
TEST_RESULT_FILE = BASE_DIR / "test_result.md"
API_ENDPOINT = os.environ.get("JIRA_API_ENDPOINT", "http://localhost:8000/api/jira/issue")
API_TIMEOUT = float(os.environ.get("API_TIMEOUT", "10.0"))

def extract_yaml_from_markdown(file_path):
    """Extracts the YAML section from the test_result.md file."""
    try:
        if not Path(file_path).exists():
            logger.error(f"File not found: {file_path}")
            return None
        
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find the start of the testing data section
        marker = "#===================================================================================================="
        if marker not in content:
            logger.warning(f"Marker not found in {file_path}. File format may have changed.")
            return None
        
        parts = content.split(marker)
        
        if len(parts) < 3:
            logger.warning("Could not parse expected sections in test_result.md")
            return None
            
        # The third part contains the YAML data
        yaml_content = parts[2].strip()
        # Remove the header line if it exists in that part
        yaml_content = "\n".join([line for line in yaml_content.splitlines() if "Testing Data" not in line])
        
        parsed_data = yaml.safe_load(yaml_content)
        if not parsed_data:
            logger.warning("YAML content parsed to empty/None")
        return parsed_data
    except yaml.YAMLError as e:
        logger.error(f"YAML parsing error: {e}")
        return None
    except IOError as e:
        logger.error(f"IO error reading file: {e}")
        return None

async def sync_tasks():
    """Sync pending tasks from test_result.md to Jira."""
    logger.info(f"Reading tasks from {TEST_RESULT_FILE}...")
    data = extract_yaml_from_markdown(TEST_RESULT_FILE)
    
    if not data:
        logger.error("Could not parse YAML data from test_result.md")
        return

    commit_hash, commit_msg = get_git_info()
    
    pending_tasks = []
    
    # Collect unimplemented tasks from backend and frontend
    for category in ['backend', 'frontend']:
        if category not in data:
            logger.debug(f"No '{category}' section found in test data")
            continue
            
        for task in data[category]:
            # Validate task structure
            if not isinstance(task, dict):
                logger.warning(f"Invalid task format (not dict): {task}")
                continue
            
            if 'task' not in task:
                logger.warning(f"Task missing 'task' field: {task}")
                continue
            
            # Only sync unimplemented tasks
            if task.get('implemented', True):
                continue
            
            # Build proper Jira API payload structure
            task_summary = f"[{category.upper()}] {task['task']}"
            task_description = f"File: {task.get('file', 'N/A')}\nPriority: {task.get('priority', 'N/A')}\nStatus: Pending implementation"
            task_type = task.get('type', 'Task')  # Defaults to Task
            
            if commit_hash:
                task_description += f"\n\nSync triggered by Commit: {commit_hash}\nMessage: {commit_msg.strip()}"

            pending_tasks.append({
                "summary": task_summary,
                "description": task_description,
                "issue_type": task_type,
                "project_key": "PMJ"
            })

    if not pending_tasks:
        logger.info("No pending tasks found to sync.")
        return

    logger.info(f"Found {len(pending_tasks)} pending tasks. Syncing to Jira...")

    success_count = 0
    failed_count = 0
    
    # Use timeout for HTTP client
    timeout = httpx.Timeout(API_TIMEOUT)
    async with httpx.AsyncClient(timeout=timeout) as client:
        for task_data in pending_tasks:
            try:
                response = await client.post(API_ENDPOINT, json=task_data)
                
                if response.status_code == 200:
                    res_json = response.json()
                    logger.info(f"✅ Synced: {task_data['summary']} -> {res_json.get('jira_key')}")
                    success_count += 1
                elif response.status_code == 400:
                    logger.error(f"❌ Bad Request for '{task_data['summary']}': {response.text}")
                    failed_count += 1
                elif response.status_code == 401:
                    logger.error(f"❌ Unauthorized: Check Jira credentials in .env")
                    break  # Stop on auth failure
                elif response.status_code == 404:
                    logger.error(f"❌ Not Found: API endpoint may have changed: {API_ENDPOINT}")
                    break
                elif response.status_code == 500:
                    logger.error(f"❌ Server Error: {response.text}")
                    failed_count += 1
                else:
                    logger.error(f"❌ Unexpected status {response.status_code} for '{task_data['summary']}': {response.text}")
                    failed_count += 1
                    
            except asyncio.TimeoutError:
                logger.error(f"⏱️  Timeout syncing '{task_data['summary']}': Request took longer than {API_TIMEOUT}s")
                failed_count += 1
            except Exception as e:
                logger.error(f"❌ Connection error syncing '{task_data['summary']}': {str(e)}")
                logger.info("Tip: Is server.py running? Check if FastAPI is accessible at http://localhost:8000")
                failed_count += 1
    
    logger.info(f"\nSync Summary: {success_count} succeeded, {failed_count} failed out of {len(pending_tasks)} tasks.")

if __name__ == "__main__":
    try:
        logger.info("Starting Jira sync process...")
        logger.debug(f"API Endpoint: {API_ENDPOINT}")
        logger.debug(f"Test Result File: {TEST_RESULT_FILE}")
        asyncio.run(sync_tasks())
        logger.info("Jira sync completed successfully")
    except KeyboardInterrupt:
        logger.info("Sync cancelled by user")
    except Exception as e:
        logger.error(f"An unexpected error occurred: {e}", exc_info=True)
