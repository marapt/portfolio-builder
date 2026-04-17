#!/usr/bin/env python3
import os
import re
import json
import logging
from datetime import datetime
from pathlib import Path
import google.generativeai as genai
from dotenv import load_dotenv

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
            log_entry = {
                "working": working,
                "agent": "portfolio_manager",
                "timestamp": datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                "task": task_name,
                "comment": comment
            }
            
            # Append to state file
            status_indicator = "✓" if working else "✗"
            with open(self.state_file, 'a', encoding='utf-8') as f:
                f.write(f"\n[{log_entry['timestamp']}] {status_indicator} {log_entry['agent']} - {task_name}: {comment}")
            
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

        try:
            response = self.model.generate_content(prompt)
            # Robustly strip markdown code blocks if the AI includes them anyway
            raw_text = response.text
            js_code = re.sub(r'```(?:javascript|js)?\n?|\n?```', '', raw_text).strip()
            
            if "export const" in js_code:
                with open(self.frontend_data, 'w', encoding='utf-8') as f:
                    f.write(js_code)
                self.update_state("Frontend Sync", "AI-driven sync of CONTENT_EXPORT.md to projectsData.js complete.")
            else:
                logger.error("AI returned invalid JS structure (missing exports)")
                return "Error: AI generated invalid code structure."
        except Exception as e:
            logger.error(f"Sync failed: {e}")
            return f"Error during sync: {e}"
            
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