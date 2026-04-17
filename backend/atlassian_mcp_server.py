#!/usr/bin/env python3
"""
Atlassian MCP (Model Context Protocol) Server
Exposes Jira capabilities to AI agents and enables automated project management.
"""

import os
import json
import logging
import httpx
import asyncio
from typing import Any, Optional
from pathlib import Path
from datetime import datetime, timezone
from dotenv import load_dotenv
from pydantic import BaseModel, Field

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Load environment
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')


class JiraConfig:
    """
    Jira configuration from environment.
    Note: REACT_APP_ prefixes are excluded here to prevent accidental leakage
    to the frontend by build systems.
    """
    def __init__(self):
        self.instance_url = os.environ.get('JIRA_INSTANCE_URL') or os.environ.get('JIRA_BASE_URL')
        self.email = os.environ.get('JIRA_EMAIL')
        self.token = os.environ.get('JIRA_API_TOKEN')
        self.board_id = os.environ.get('JIRA_BOARD_ID', '1')
        
    def is_configured(self) -> bool:
        return all([self.instance_url, self.email, self.token])
    
    def get_auth(self):
        return (self.email, self.token)


class IssueResponse(BaseModel):
    """Jira issue response model"""
    key: str
    summary: str
    description: Optional[str] = None
    status: str
    priority: str
    assignee: Optional[str] = None
    created: str
    updated: str


class MCPTool:
    """Base class for MCP tools"""
    def __init__(self, name: str, description: str):
        self.name = name
        self.description = description
    
    async def execute(self, **kwargs) -> Any:
        raise NotImplementedError


class GetBoardIssuesTool(MCPTool):
    """Fetch all issues from a Jira board"""
    def __init__(self):
        super().__init__(
            name="get_board_issues",
            description="Fetch all issues from a Jira board with filtering and pagination"
        )
    
    async def execute(self, board_id: str = None, status: str = None, **kwargs) -> dict:
        config = JiraConfig()
        if not config.is_configured():
            return {"error": "Jira credentials not configured"}
        
        board_id = board_id or config.board_id
        
        try:
            url = f"{config.instance_url.rstrip('/')}/rest/agile/1.0/board/{board_id}/issue"
            
            async with httpx.AsyncClient() as client:
                response = await client.get(
                    url,
                    auth=config.get_auth(),
                    params={"maxResults": 100}
                )
                response.raise_for_status()
                data = response.json()
            
            issues = []
            for issue in data.get('issues', []):
                issue_status = issue.get('fields', {}).get('status', {}).get('name')
                
                # Filter by status if specified
                if status and issue_status.lower() != status.lower():
                    continue
                
                issues.append({
                    'key': issue.get('key'),
                    'summary': issue.get('fields', {}).get('summary'),
                    'description': issue.get('fields', {}).get('description'),
                    'status': issue_status,
                    'priority': issue.get('fields', {}).get('priority', {}).get('name'),
                    'assignee': issue.get('fields', {}).get('assignee', {}).get('displayName'),
                    'created': issue.get('fields', {}).get('created'),
                    'updated': issue.get('fields', {}).get('updated'),
                    'url': issue.get('self')
                })
            
            logger.info(f"Fetched {len(issues)} issues from board {board_id}")
            return {"board_id": board_id, "issues": issues, "total": len(issues)}
        
        except httpx.HTTPStatusError as e:
            logger.error(f"Jira API error: {e.response.status_code}")
            return {"error": f"Jira API error: {e.response.status_code}", "detail": e.response.text}
        except Exception as e:
            logger.error(f"Error fetching board issues: {str(e)}")
            return {"error": str(e)}


class CreateIssueTool(MCPTool):
    """Create a new Jira issue"""
    def __init__(self):
        super().__init__(
            name="create_issue",
            description="Create a new issue in Jira"
        )
    
    async def execute(self, project_key: str, summary: str, description: str, 
                     issue_type: str = "Task", **kwargs) -> dict:
        config = JiraConfig()
        if not config.is_configured():
            return {"error": "Jira credentials not configured"}
        
        try:
            url = f"{config.instance_url.rstrip('/')}/rest/api/2/issue"
            
            payload = {
                "fields": {
                    "project": {"key": project_key},
                    "summary": summary,
                    "description": description,
                    "issuetype": {"name": issue_type}
                }
            }
            
            async with httpx.AsyncClient() as client:
                response = await client.post(
                    url,
                    json=payload,
                    auth=config.get_auth(),
                    headers={"Content-Type": "application/json"}
                )
                response.raise_for_status()
                data = response.json()
            
            logger.info(f"Created issue: {data.get('key')}")
            return {
                "success": True,
                "issue_key": data.get('key'),
                "issue_id": data.get('id'),
                "url": data.get('self')
            }
        
        except httpx.HTTPStatusError as e:
            logger.error(f"Error creating issue: {e.response.status_code}")
            return {"error": f"Failed to create issue: {e.response.text}"}
        except Exception as e:
            logger.error(f"Unexpected error: {str(e)}")
            return {"error": str(e)}


class UpdateIssueTool(MCPTool):
    """Update an existing Jira issue"""
    def __init__(self):
        super().__init__(
            name="update_issue",
            description="Update an existing Jira issue"
        )
    
    async def execute(self, issue_key: str, summary: str = None, 
                     description: str = None, status: str = None, **kwargs) -> dict:
        config = JiraConfig()
        if not config.is_configured():
            return {"error": "Jira credentials not configured"}
        
        try:
            url = f"{config.instance_url.rstrip('/')}/rest/api/2/issue/{issue_key}"
            
            fields = {}
            if summary:
                fields["summary"] = summary
            if description:
                fields["description"] = description
            
            payload = {"fields": fields}
            
            # Handle status change (requires transition)
            if status:
                # Get available transitions
                transitions_url = f"{url}/transitions"
                async with httpx.AsyncClient() as client:
                    transitions_response = await client.get(
                        transitions_url,
                        auth=config.get_auth()
                    )
                    transitions_response.raise_for_status()
                    transitions = transitions_response.json().get('transitions', [])
                
                # Find matching transition
                transition_id = None
                for trans in transitions:
                    if trans.get('to', {}).get('name', '').lower() == status.lower():
                        transition_id = trans.get('id')
                        break
                
                if transition_id:
                    payload["transition"] = {"id": transition_id}
            
            async with httpx.AsyncClient() as client:
                response = await client.put(
                    url,
                    json=payload,
                    auth=config.get_auth(),
                    headers={"Content-Type": "application/json"}
                )
                response.raise_for_status()
            
            logger.info(f"Updated issue: {issue_key}")
            return {"success": True, "issue_key": issue_key}
        
        except httpx.HTTPStatusError as e:
            logger.error(f"Error updating issue: {e.response.status_code}")
            return {"error": f"Failed to update issue: {e.response.text}"}
        except Exception as e:
            logger.error(f"Unexpected error: {str(e)}")
            return {"error": str(e)}


class SearchIssuesToolTool(MCPTool):
    """Search for Jira issues using JQL"""
    def __init__(self):
        super().__init__(
            name="search_issues",
            description="Search for Jira issues using JQL (Jira Query Language)"
        )
    
    async def execute(self, jql: str, **kwargs) -> dict:
        config = JiraConfig()
        if not config.is_configured():
            return {"error": "Jira credentials not configured"}
        
        try:
            url = f"{config.instance_url.rstrip('/')}/rest/api/2/search"
            
            async with httpx.AsyncClient() as client:
                response = await client.get(
                    url,
                    auth=config.get_auth(),
                    params={
                        "jql": jql,
                        "maxResults": 50,
                        "fields": "key,summary,status,priority,assignee,created,updated"
                    }
                )
                response.raise_for_status()
                data = response.json()
            
            issues = []
            for issue in data.get('issues', []):
                issues.append({
                    'key': issue.get('key'),
                    'summary': issue.get('fields', {}).get('summary'),
                    'status': issue.get('fields', {}).get('status', {}).get('name'),
                    'priority': issue.get('fields', {}).get('priority', {}).get('name'),
                    'assignee': issue.get('fields', {}).get('assignee', {}).get('displayName'),
                    'created': issue.get('fields', {}).get('created'),
                    'updated': issue.get('fields', {}).get('updated')
                })
            
            logger.info(f"Search returned {len(issues)} issues")
            return {"total": data.get('total'), "issues": issues}
        
        except Exception as e:
            logger.error(f"Error searching issues: {str(e)}")
            return {"error": str(e)}


class AtlassianMCPServer:
    """Main Atlassian MCP Server"""
    
    def __init__(self):
        self.tools = {
            "get_board_issues": GetBoardIssuesTool(),
            "create_issue": CreateIssueTool(),
            "update_issue": UpdateIssueTool(),
            "search_issues": SearchIssuesToolTool(),
        }
        logger.info("Atlassian MCP Server initialized")
    
    def get_tools(self) -> dict:
        """Return available tools"""
        return {
            name: {
                "name": tool.name,
                "description": tool.description
            }
            for name, tool in self.tools.items()
        }
    
    async def execute_tool(self, tool_name: str, **kwargs) -> dict:
        """Execute a tool"""
        if tool_name not in self.tools:
            return {"error": f"Unknown tool: {tool_name}"}
        
        tool = self.tools[tool_name]
        return await tool.execute(**kwargs)
    
    async def run_server(self, host: str = "127.0.0.1", port: int = 8001):
        """Run the MCP server"""
        logger.info(f"Starting Atlassian MCP Server on {host}:{port}")
        logger.info(f"Available tools: {list(self.tools.keys())}")
        
        # This is a standalone async server
        # In production, integrate with FastAPI or similar
        while True:
            await asyncio.sleep(1)


async def main():
    """Main entry point"""
    server = AtlassianMCPServer()
    
    # Display available tools
    print("\n=== Atlassian MCP Server ===")
    print("Available Tools:")
    for name, info in server.get_tools().items():
        print(f"  - {name}: {info['description']}")
    print("\n")
    
    # Test mode: Execute sample commands
    if os.environ.get('MCP_TEST_MODE') == 'true':
        print("Running in test mode...")
        result = await server.execute_tool(
            "get_board_issues",
            board_id=os.environ.get('JIRA_BOARD_ID', '1')
        )
        print(f"Result: {json.dumps(result, indent=2)}")
    else:
        # Production: Run as server
        await server.run_server()


if __name__ == "__main__":
    asyncio.run(main())
