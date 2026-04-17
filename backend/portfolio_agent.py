import os
import re
import json
import yaml
from datetime import datetime
from pathlib import Path

class PortfolioManagerAgent:
    def __init__(self):
        self.root_dir = Path(__file__).parent.parent
        self.content_file = self.root_dir / "CONTENT_EXPORT.md"
        self.state_file = self.root_dir / "test_result.md"
        self.frontend_data = self.root_dir / "frontend/src/data/projectsData.js"
        self.role = "Portfolio Content Specialist"

    def read_context(self):
        """Reads the current portfolio content and agent state."""
        with open(self.content_file, 'r') as f:
            content = f.read()
        return content

    def update_state(self, task_name, comment, working=True):
        """Logs the agent's action back to the MAS protocol file."""
        # This simulates the main agent logic for status tracking
        log_entry = {
            "working": working,
            "agent": "portfolio_manager",
            "comment": f"[{datetime.now().strftime('%Y-%m-%d %H:%M')}] {comment}"
        }
        print(f"ACTION: Updating MAS State in {self.state_file}: {comment}")

    def sync_to_frontend(self):
        """
        Updates projectsData.js based on CONTENT_EXPORT.md content.
        In a full implementation, this uses an LLM to map Markdown sections 
        to the specific JS object structure.
        """
        self.update_state("Frontend Sync", "Synchronized source of truth with projectsData.js")
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
        # context = self.read_context()
        print(f"Agent Processing Prompt: {user_prompt}")
        
        if "add project" in user_prompt.lower():
            new_project_title = user_prompt.split("titled")[-1].strip()
            # Logic to append/modify CONTENT_EXPORT.md would go here
            self.update_state(
                "Portfolio Content Update", 
                f"Added project: {new_project_title}. Triggering sync..."
            )
            return f"Success: Added {new_project_title} to source of truth."
        
        if "sync" in user_prompt.lower():
            return self.sync_to_frontend()

        return "I can help you 'add a project' or 'sync' the frontend data."

if __name__ == "__main__":
    agent = PortfolioManagerAgent()
    # Example: Simulating an update
    result = agent.process_prompt("Add a new project titled 'GenAI Localization Tool'")
    print(result)
    # Example: Syncing data
    print(agent.process_prompt("Sync the portfolio data"))
    print(result)

"""
STEPS TO ENHANCE:
1. Integrate 'langchain' or 'google-generativeai' to handle the text generation.
2. Add a 'File Writing' tool so the agent can modify projectsData.js directly.
3. Connect to a CLI so you can run: python portfolio_agent.py "Update my bio"
"""