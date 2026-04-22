/**
 * Service to handle Jira API interactions.
 * 
 * SECURITY NOTE: To avoid CORS issues and leaking your API Token, 
 * these calls are proxied through your FastAPI backend.
 * 
 * HARDENING: We use a shared internal API key to authorize these requests.
 */

const API_BASE_URL = (process.env.REACT_APP_API_URL || 'http://localhost:8000').replace(/\/$/, '');
const JIRA_BOARD_ID = process.env.REACT_APP_JIRA_BOARD_ID || '1';
const INTERNAL_API_KEY = process.env.REACT_APP_INTERNAL_API_KEY;

const fetchWithAuth = async (url) => {
  const headers = {
    'Content-Type': 'application/json'
  };
  
  if (INTERNAL_API_KEY) {
    headers['x-api-key'] = INTERNAL_API_KEY;
  }

  const response = await fetch(url, { headers });
  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }
  return response.json();
};

export const jiraService = {
  fetchLiveBoard: async () => {
    const url = `${API_BASE_URL}/api/jira/board/${JIRA_BOARD_ID}`;
    return fetchWithAuth(url);
  },
  fetchSprints: async () => {
    const url = `${API_BASE_URL}/api/jira/board/${JIRA_BOARD_ID}/sprints`;
    return fetchWithAuth(url);
  },
  fetchRoadmap: async () => {
    const url = `${API_BASE_URL}/api/project/roadmap`;
    return fetchWithAuth(url);
  }
};