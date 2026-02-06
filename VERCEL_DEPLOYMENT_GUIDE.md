# Deploy Your Portfolio to Vercel + Connect Your Domain

This guide will help you deploy your React portfolio to Vercel (free) and connect your custom domain (maramartins.com).

---

## Prerequisites

1. **GitHub Account** - You already have one (marapt)
2. **Vercel Account** - Free at [vercel.com](https://vercel.com) (sign up with GitHub)
3. **Domain Access** - Access to your domain registrar (where you bought maramartins.com)

---

## Step 1: Push Code to GitHub

### Option A: Create New Repository

1. Go to [github.com/new](https://github.com/new)
2. Name it: `mara-portfolio` (or any name)
3. Keep it **Public** or **Private** (both work)
4. Click **Create repository**

### Option B: Download Code First

I'll provide you with the complete code files. You can:
1. Download them
2. Create a new GitHub repo
3. Upload/push the files

---

## Step 2: Prepare Code for Deployment

### Files Structure Needed
```
mara-portfolio/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
├── tailwind.config.js
└── vercel.json        ← Add this file
```

### Create vercel.json

Add this file to handle client-side routing:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

---

## Step 3: Deploy to Vercel

### 3.1 Sign Up/Login to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up** → **Continue with GitHub**
3. Authorize Vercel to access your GitHub

### 3.2 Import Your Project

1. Click **Add New...** → **Project**
2. Find your `mara-portfolio` repository
3. Click **Import**

### 3.3 Configure Build Settings

| Setting | Value |
|---------|-------|
| Framework Preset | Create React App |
| Root Directory | `./` (or `frontend` if nested) |
| Build Command | `yarn build` |
| Output Directory | `build` |

### 3.4 Environment Variables (Optional)

If you have a backend API:
- Click **Environment Variables**
- Add: `REACT_APP_BACKEND_URL` = your backend URL

### 3.5 Deploy

1. Click **Deploy**
2. Wait 1-2 minutes for build
3. You'll get a URL like: `mara-portfolio.vercel.app`

🎉 **Your site is now live!**

---

## Step 4: Connect Your Custom Domain

### 4.1 Add Domain in Vercel

1. Go to your project in Vercel
2. Click **Settings** → **Domains**
3. Enter: `maramartins.com`
4. Click **Add**

Vercel will show you DNS records to add.

### 4.2 Configure DNS Records

**Option A: Using Vercel Nameservers (Recommended)**

Change your domain's nameservers to:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**Option B: Using A Record + CNAME**

Add these records at your domain registrar:

| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

### 4.3 Wait for Propagation

- DNS changes take 5 minutes to 48 hours
- Usually works within 30 minutes
- Vercel will show ✓ when verified

### 4.4 SSL Certificate

- Vercel automatically provisions SSL
- Your site will be available at `https://maramartins.com`

---

## Step 5: Redirect Settings (Optional but Recommended)

In Vercel **Settings** → **Domains**:

1. Set `maramartins.com` as primary
2. Redirect `www.maramartins.com` → `maramartins.com`

---

## Common Domain Registrars - Quick Guides

### GoDaddy
1. My Products → Domains → DNS
2. Add A Record: @ → 76.76.21.21
3. Add CNAME: www → cname.vercel-dns.com

### Namecheap
1. Domain List → Manage → Advanced DNS
2. Add A Record: @ → 76.76.21.21
3. Add CNAME: www → cname.vercel-dns.com

### Google Domains
1. My Domains → Manage → DNS
2. Custom Records → Manage
3. Add records as above

### Cloudflare
1. Select domain → DNS
2. Add A Record: @ → 76.76.21.21 (Proxy OFF)
3. Add CNAME: www → cname.vercel-dns.com (Proxy OFF)

---

## Step 6: Verify Everything Works

### Checklist
- [ ] `https://maramartins.com` loads your portfolio
- [ ] `https://www.maramartins.com` redirects to main domain
- [ ] SSL padlock shows in browser
- [ ] All pages work (home, project pages)
- [ ] Navigation works correctly
- [ ] Images load properly

---

## Updating Your Site

After initial setup, updates are automatic:

1. Make changes to your code
2. Push to GitHub (`git push`)
3. Vercel automatically rebuilds and deploys
4. Changes live in ~1 minute

---

## Troubleshooting

### "Page Not Found" on Refresh
Make sure `vercel.json` has the rewrite rule for client-side routing.

### Images Not Loading
Check that all image URLs are absolute (start with https://).

### Domain Not Connecting
- Wait longer (up to 48 hours)
- Verify DNS records are correct
- Check for typos in CNAME value

### Build Failing
- Check Vercel build logs for errors
- Make sure all dependencies are in package.json
- Try building locally first: `yarn build`

---

## Alternative: Deploy Backend Too

If you want the contact form to actually work (send emails, save to database):

1. **Backend Options:**
   - Vercel Serverless Functions (easiest)
   - Railway.app (free tier)
   - Render.com (free tier)

2. **Simple Email Option:**
   - Use Formspree.io (free)
   - Just change form action to Formspree endpoint
   - No backend needed!

### Quick Formspree Setup
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form, get endpoint like: `https://formspree.io/f/xxxxx`
3. Update your contact form to submit to that URL

---

## Summary

| Step | Time | Difficulty |
|------|------|------------|
| Push to GitHub | 5 min | Easy |
| Deploy to Vercel | 5 min | Easy |
| Connect Domain | 10 min | Medium |
| DNS Propagation | 5-30 min | Wait |
| **Total** | **~30 min** | ✅ |

---

## Need Help?

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Domain Help:** Contact your registrar's support
- **Video Tutorials:** Search "Deploy React to Vercel" on YouTube

Good luck! 🚀
