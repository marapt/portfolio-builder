# Project Reflections & Learnings

This document captures key technical challenges, errors, and resolutions encountered during the portfolio development process.

## 🛡️ Infrastructure & Security

### Secure API Proxy (PJM-46)
- **Challenge**: Exposed API keys in the frontend were a security risk.
- **Resolution**: Implemented a FastAPI proxy layer. Sensitive keys (Jira, EmailJS) now reside strictly server-side. The frontend communicates via a shared `INTERNAL_API_KEY` header.
- **Learning**: Always architect with a "Backend-for-Frontend" (BFF) pattern when dealing with third-party SaaS integrations.

## 🌐 Localization (PJM-10)

### i18n Tech Stack
- **Implementation**: Used `i18next` and `react-i18next` to build a scalable multi-language Information Architecture.
- **Hierarchy**: Created a `locales` object hierarchy within `projectsData.js` to allow project-specific translations without bloating generic locale files.

## 🐞 Bug Fixes

### 1. Vercel Build Failure (Syntax Error)
- **Error**: `Syntax error: Unexpected token, expected ":"` in `ScrumBoardPage.jsx`.
- **Cause**: A malformed ternary operator within a template literal on the Priority Badge.
  - *Incorrect*: `${issue.priority === 'High' ? 'bg-red-50' text-red-500 : 'bg-green-50' text-green-500}`
- **Fix**: Properly encapsulated the entire class string within the ternary segments.
  - *Corrected*: `${issue.priority === 'High' ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-500'}`
- **Learning**: Template literals within JSX attributes can be deceptive; always verify that the ternary result is a single valid string.

### 2. Header Alignment & Toggle UI
- **Issue**: Inserting the Language Switcher caused vertical misalignment and overcrowding in the desktop navigation.
- **Resolution**: 
  - Standardized the flex containers to use `items-center` and unified vertical padding.
  - Refined the Language Switcher into a premium "Glassmorphic Pill" design to reduce visual noise.
- **Learning**: When adding new interactive elements to a stable header, re-evaluate the container's `gap` and `tracking` to maintain visual balance.
