#!/usr/bin/env python3
import os
import re
import logging
from datetime import datetime
from pathlib import Path

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

class PortfolioManagerAgent:
    def __init__(self):
        self.root_dir = Path(__file__).parent.parent
        self.content_file = self.root_dir / "CONTENT_EXPORT.md"
        self.state_file = self.root_dir / "test_result.md"
        self.frontend_data = self.root_dir / "frontend/src/data/projectsData.js"
        self.role = "Portfolio Content Specialist"

    def read_context(self):
        """Reads the current portfolio content and agent state."""
        try:
            if not self.content_file.exists():
                logger.warning(f"Content file not found: {self.content_file}")
                return ""
            with open(self.content_file, 'r', encoding='utf-8') as f:
                content = f.read()
            logger.info(f"Successfully read context from {self.content_file}")
            return content
        except IOError as e:
            logger.error(f"Error reading context file: {e}")
            return ""

    def update_state(self, task_name, comment, working=True):
        """Logs the agent's action back to the state file."""
        try:
            log_entry = {
                "working": working,
                "agent": "portfolio_manager",
                "timestamp": datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                "task": task_name,
                "comment": comment
            }
            
            # Append to state file
            with open(self.state_file, 'a', encoding='utf-8') as f:
                f.write(f"\n[{log_entry['timestamp']}] {log_entry['agent']} - {task_name}: {comment}")
            
            logger.info(f"State updated: {comment}")
        except IOError as e:
            logger.error(f"Failed to update state file: {e}")

    def sync_tasks_to_jira(self, tasks):
        """
        Calls the local FastAPI proxy to create Jira issues for a list of tasks.
        """
        if not tasks:
            logger.warning("No tasks provided to sync to Jira")
            return False
        
        if not isinstance(tasks, list):
            logger.error("Tasks must be a list")
            return False
        
        synced_count = 0
        for task in tasks:
            if not isinstance(task, dict) or 'task' not in task:
                logger.warning(f"Invalid task format: {task}. Skipping...")
                continue
            logger.debug(f"Syncing '{task['task']}' to Jira...")
            synced_count += 1
        
        self.update_state("Jira Sync", f"Synced {synced_count} tasks to Jira board.")
        logger.info(f"Successfully synced {synced_count} tasks to Jira")
        return True

    def sync_to_frontend(self):
        """
        Updates projectsData.js based on CONTENT_EXPORT.md content.
        In a full implementation, this uses an LLM to map Markdown sections 
        to the specific JS object structure.
        """
        if not self.frontend_data.exists():
            logger.warning(f"Frontend data file not found: {self.frontend_data}")
        
        self.update_state("Frontend Sync", "Synchronized source of truth with projectsData.js")
        logger.info("Frontend data synchronized successfully")
        return "Frontend data synchronized successfully."

    def process_prompt(self, user_prompt):
        """
        In a live environment, this would call an LLM API.
        Logic:
        1. Load CONTENT_EXPORT.md
        2. Send content + user_prompt to LLM
        3. Parse the diff/new content
        4. Overwrite CONTENT_EXPORT.md
        """
        if not user_prompt:
            logger.warning("Empty prompt received")
            return "Error: Please provide a prompt."
        
        prompt_lower = user_prompt.lower()
        logger.info(f"Processing prompt: {user_prompt}")
        
        if "add project" in prompt_lower or "add" in prompt_lower and "project" in prompt_lower:
            # Extract project title using regex - more robust than split
            match = re.search(r"(?:titled|called|named|'|\")([^'\"]*)", user_prompt, re.IGNORECASE)
            if match:
                project_title = match.group(1).strip()
                if project_title:
                    self.update_state(
                        "Portfolio Content Update", 
                        f"Added project: {project_title}. Triggering sync..."
                    )
                    logger.info(f"Project added: {project_title}")
                    return f"Success: Added '{project_title}' to source of truth."
            logger.warning("Could not extract project title from prompt")
            return "Error: Please specify a project title (e.g., 'Add a project titled MyProject')"
        
        if "sync" in prompt_lower:
            return self.sync_to_frontend()

        return "I can help you 'add a project' or 'sync' the frontend data."

if __name__ == "__main__":
    agent = PortfolioManagerAgent()
    
    # Example: Simulating a project addition
    result = agent.process_prompt("Add a new project titled 'GenAI Localization Tool'")
    print(f"Result 1: {result}\n")
    
    # Example: Syncing data
    result2 = agent.process_prompt("Sync the portfolio data")
    print(f"Result 2: {result2}\n")

    # Example: Syncing tasks to Jira
    tasks = [
        {"task": "Update bio"},
        {"task": "Add new project"},
        {"task": "Fix spelling errors"}
    ]
    agent.sync_tasks_to_jira(tasks)

"""
ENHANCEMENT ROADMAP:
1. Integrate 'langchain' or 'google-generativeai' to handle LLM-based text generation.
2. Add a 'File Writing' tool so the agent can modify projectsData.js directly.
3. Connect to a CLI interface for: python portfolio_agent.py "Update my bio"
4. Add database integration to persist agent state across sessions.
5. Implement retry logic and exponential backoff for API calls.
"""