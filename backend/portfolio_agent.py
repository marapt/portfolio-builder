#!/usr/bin/env python3
import os
import re
import json
import logging
import time
import yaml
from datetime import datetime
from pathlib import Path
import google.generativeai as genai
from dotenv import load_dotenv
import httpx

# Configure logging
logging.basicConfig(
    level=logging.DEBUG,
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
        self.model = None
        
        # Initialize AI
        load_dotenv(self.root_dir / 'backend' / '.env')
        api_key = os.environ.get("GOOGLE_API_KEY")
        if api_key:
            genai.configure(api_key=api_key)
            self.model = genai.GenerativeModel('gemini-1.5-flash')
            logger.info("Gemini API configured successfully")
        else:
            logger.warning("GOOGLE_API_KEY environment variable not found. AI features will be unavailable.")

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
            with open(self.state_file, 'r', encoding='utf-8') as f:
                content = f.read()

            marker = "#===================================================================================================="
            parts = content.split(marker)
            if not parts:
                logger.error("State file format invalid. Could not update.")
                return

            # Parse and update the YAML data section
            lines = parts[-1].splitlines()
            yaml_lines = [l for l in lines if "Testing Data" not in l and l.strip()]
            data = yaml.safe_load("\n".join(yaml_lines)) or {}
            
            if "agent_communication" not in data:
                data["agent_communication"] = []
            
            data["agent_communication"].append({
                "agent": "portfolio_manager",
                "message": f"[{datetime.now().strftime('%Y-%m-%d %H:%M')}] {task_name}: {comment}"
            })

            # Reconstruct part 2 with header
            header = "\n\n# Testing Data - Main Agent and testing sub agent both should log testing data below this section\n"
            updated_yaml = yaml.dump(data, sort_keys=False, allow_unicode=True)
            parts[-1] = header + updated_yaml
            
            with open(self.state_file, 'w', encoding='utf-8') as f:
                f.write(marker.join(parts))

            logger.info(f"State updated in MAS protocol: {comment}")
        except Exception as e:
            logger.error(f"Failed to update state file YAML: {e}")

    async def sync_tasks_to_jira(self):
        """
        Reads pending tasks from test_result.md and pushes them to the Jira proxy.
        """
        from sync_to_jira import extract_yaml_from_markdown, API_ENDPOINT

        data = extract_yaml_from_markdown(self.state_file)
        if not data:
            return "Error: Could not parse task data."

        pending = []
        for cat in ['backend', 'frontend']:
            if cat in data:
                for t in data[cat]:
                    if not t.get('implemented', True):
                        pending.append({
                            "summary": f"[{cat.upper()}] {t['task']}",
                            "description": f"File: {t.get('file', 'N/A')}\nPriority: {t.get('priority')}",
                            "project_key": os.environ.get("JIRA_PROJECT_KEY", "PMJ")
                        })

        if not pending:
            return "No pending tasks found to sync."

        async with httpx.AsyncClient() as client:
            success = 0
            for task_payload in pending:
                try:
                    resp = await client.post(API_ENDPOINT, json=task_payload)
                    if resp.status_code == 200:
                        success += 1
                except Exception as e:
                    logger.error(f"Failed to sync task: {e}")

        msg = f"Successfully synced {success}/{len(pending)} tasks to Jira."
        self.update_state("Jira Sync", msg)
        return msg

    def sync_to_frontend(self):
        """
        Uses AI to parse CONTENT_EXPORT.md and rewrite projectsData.js.
        """
        if not self.model:
            return "Error: Gemini API not configured. Ensure GOOGLE_API_KEY environment variable is set."
        
        content = self.read_context()
        if not content:
            return "Error: No content found in CONTENT_EXPORT.md"

        prompt = f"""
        Act as a Senior Frontend Engineer. Convert the following Portfolio Markdown content into a valid 'projectsData.js' file.
        
        Required Structure:
        1. Export a constant `projectDetails` (object where keys are slugs).
        2. Export a constant `projects` (array of summary objects).
        
        Markdown:
        {content}
        
        Return ONLY valid JavaScript code. No markdown formatting, no backticks, no explanations.
        """

        max_retries = 3
        for attempt in range(max_retries):
            try:
                response = self.model.generate_content(prompt)
                raw_text = response.text
                js_code = re.sub(r'```(?:javascript|js)?\n?|\n?```', '', raw_text).strip()
                
                if "export const" in js_code:
                    with open(self.frontend_data, 'w', encoding='utf-8') as f:
                        f.write(js_code)
                    self.update_state("Frontend Sync", "AI-driven sync complete.")
                    return "Frontend data synchronized successfully."
                else:
                    logger.error(f"Attempt {attempt+1}: Invalid JS structure.")
            except Exception as e:
                logger.warning(f"Attempt {attempt+1} failed: {e}")
                if attempt < max_retries - 1:
                    time.sleep(2 ** attempt) # Exponential backoff
                else:
                    return f"Error: Sync failed after {max_retries} attempts."
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
        if not self.model:
            return "Error: Gemini API not configured. Ensure GOOGLE_API_KEY environment variable is set."
        
        if "sync" in user_prompt.lower():
            return self.sync_to_frontend()

        context = self.read_context()
        prompt = f"""
        Current Content:
        {context}
        
        Instruction: {user_prompt}
        
        Update the Markdown content above based on the instruction. 
        Return the ENTIRE updated Markdown file. 
        Maintain the existing structure and headers.
        Return ONLY the Markdown.
        """
        
        try:
            response = self.model.generate_content(prompt)
            raw_text = response.text
            updated_md = re.sub(r'```(?:markdown|md)?\n?|\n?```', '', raw_text).strip()
            
            with open(self.content_file, 'w', encoding='utf-8') as f:
                f.write(updated_md)
            
            self.update_state("AI Update", f"Processed prompt: {user_prompt}")
            return "Success: Portfolio content updated. Run 'sync' to push to frontend."
        except Exception as e:
            logger.error(f"AI processing failed: {e}")
            return f"Error: {e}"

if __name__ == "__main__":
    import sys
    agent = PortfolioManagerAgent()
    
    if len(sys.argv) > 1:
        user_input = " ".join(sys.argv[1:])
        print(f"Processing: {user_input}")
        result = agent.process_prompt(user_input)
        print(result)
    else:
        print("Portfolio Manager Agent initialized.")
        print("Usage: python portfolio_agent.py '<your command>'")
        print("Example: python portfolio_agent.py 'Update my experience section'")
        print("Example: python portfolio_agent.py 'sync'")
        print("\nAgent is ready for integration with other services.")

"""
ENHANCEMENT ROADMAP:
1. Integrate 'langchain' or 'google-generativeai' to handle LLM-based text generation.
2. Add a 'File Writing' tool so the agent can modify projectsData.js directly.
3. Connect to a CLI interface for: python portfolio_agent.py "Update my bio"
4. Add database integration to persist agent state across sessions.
5. Implement retry logic and exponential backoff for API calls.
"""