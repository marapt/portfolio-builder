/**
 * Service to handle Jira API interactions.
 * 
 * SECURITY NOTE: To avoid CORS issues and leaking your API Token, 
 * these calls are proxied through your FastAPI backend.
 */

const API_BASE_URL = (process.env.REACT_APP_API_URL || 'http://localhost:8000').replace(/\/$/, '');
const JIRA_BOARD_ID = '1';

export const jiraService = {
  fetchLiveBoard: async () => {
    const url = `${API_BASE_URL}/api/jira/board/${JIRA_BOARD_ID}`;
    console.log(`Attempting to fetch Jira board ${JIRA_BOARD_ID} from ${url}`);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Jira API Error: ${response.statusText}`);
    }
    return response.json();
  }
};