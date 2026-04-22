import os, httpx, asyncio
from dotenv import load_dotenv

async def post_mortem():
    load_dotenv('backend/.env')
    auth = (os.environ.get('JIRA_EMAIL'), os.environ.get('JIRA_API_TOKEN'))
    base_url = os.environ.get('JIRA_BASE_URL', '').rstrip('/')
    key = 'PJM-10'
    
    comment = (
        "{panel:title=🚨 Post-Mortem: Vercel Build Failure|borderStyle=solid|borderColor=#ccc|titleBGColor=#F7D6D6|bgColor=#fff}\n"
        "*Issue:* Syntax error in ScrumBoardPage.jsx (Line 277) prevented production deployment.\n\n"
        "*❌ The Error:*\n"
        "{code:javascript}<Badge className={`${issue.priority === 'High' ? 'bg-red-50' text-red-500 : 'bg-green-50' text-green-500} border-0`}>{code}\n\n"
        "*✅ The Fix:*\n"
        "{code:javascript}<Badge className={`${issue.priority === 'High' ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-500'} border-0`}>{code}\n\n"
        "*Learning:* Shared template literal logic within JSX properties requires strict string encapsulation for ternary results.{panel}"
    )
    
    url = f'{base_url}/rest/api/2/issue/{key}/comment'
    async with httpx.AsyncClient() as client:
        resp = await client.post(url, json={'body': comment}, auth=auth)
        if resp.status_code == 201:
            print(f'Successfully added post-mortem comment to {key}.')
        else:
            print(f'Failed: {resp.status_code} {resp.text}')

if __name__ == "__main__":
    asyncio.run(post_mortem())
