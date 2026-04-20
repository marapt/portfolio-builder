# Deploy Your Portfolio to Vercel

This guide is updated for your current repository structure, where the React application lives in the `frontend/` folder.

---

## Prerequisites

1. **GitHub Account** - Ensure this repository is pushed to your GitHub.
2. **Vercel Account** - vercel.com (login with GitHub).
3. **Domain Access** - Access to `maramartins.com` settings (if you plan to manage DNS).

---

## Step 1: Project Structure Confirmation

Your repository is set up as a "monorepo" with the frontend in a subdirectory. Vercel handles this natively.

**Current Structure:**
```
portfolio-builder/
├── frontend/       <-- We will deploy this folder
│   ├── public/
│   ├── src/
│   ├── vercel.json <-- Added for SPA routing
│   └── package.json
├── backend/        <-- Python backend (Optional deployment)
└── ...
```

---

## Step 2: Deploy to Vercel

### 2.1 Login & Import
1. Go to your Vercel Dashboard.
2. Click **Add New...** -> **Project**.
3. Select your repository (e.g., `portfolio-builder`) and click **Import**.

### 2.2 Configure Project Settings (Crucial Step)
Vercel will detect the repository. You must configure the **Root Directory** so it knows where the React app is.

1. In the **Configure Project** screen, find the **Framework Preset**. It should auto-detect **Create React App**.
2. Look for **Root Directory**.
3. Click **Edit** and select the `frontend` folder.
   - It should display as `frontend`.
4. Leave **Build Command** and **Output Directory** as default.

### 2.3 Environment Variables
You must connect your frontend to your live backend. Under **Environment Variables**, add:
- `REACT_APP_API_URL`: The URL of your deployed Python backend (e.g., `https://portfolio-backend.onrender.com`)

*Note: The frontend now proxies contact requests and Jira fetches through the backend, so it won't function correctly if this points to localhost!*

---

### 2.4 Deploy

1. Click **Deploy**
2. Vercel will build your site. This takes about 1-2 minutes.
3. Once complete, you will see a dashboard with a preview URL (e.g., `portfolio-builder-xyz.vercel.app`).

---

## Step 3: Connect Custom Domain
1. In your Vercel Project Dashboard, go to **Settings** -> **Domains**.
2. Click **Settings** → **Domains**
3. Enter: `maramartins.com`
4. Click **Add**
5. If you want `www.maramartins.com` as well, add that too.
6. Follow the DNS instructions Vercel provides (usually adding an **A Record** pointing to `76.76.21.21` at your domain registrar).

---

## Step 4: Verify Deployment
1. Visit your Vercel URL.
2. Check that navigation works (Click "About", "Projects").
3. **Important:** The `vercel.json` file we added ensures that refreshing a sub-page (like `/resume`) correctly loads the React app instead of a 404 error.

---

## About the Backend

Your repository contains a `backend/` folder with a FastAPI application. 
- **Current Status:** The React frontend **requires** the backend to function in production. The backend securely proxies your EmailJS contact submissions and synchronizes the live Jira Board without exposing your keys to the frontend.
- **Deployment:** You must deploy this backend to a platform like Render.com, Railway, or Heroku. 
  - *Tip for Render Free Tier:* Click "New +" -> "Web Service" (Do NOT use Blueprint). Connect your repository. Set the **Build Command** to `cd backend && pip install -r requirements.txt` and **Start Command** to `cd backend && uvicorn server:app --host 0.0.0.0 --port $PORT`. Add your Environment Variables manually under the settings tab. Once deployed, remember to add your Vercel URL to the `CORS_ORIGINS` environment variable on Render!