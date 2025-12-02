# Netlify Environment Variables Setup

## Required Environment Variables

You need to add the following environment variables to your Netlify project:

### 1. OpenAI API Key (Already configured)
- **Key:** `VITE_OPENAI_API_KEY`
- **Value:** Your OpenAI API key

### 2. Xaman API Credentials (NEW - Need to add)
- **Key:** `VITE_XAMAN_API_KEY`
- **Value:** `c3f3953d-6ebb-4da4-a6de-ed5ee3cab625`

- **Key:** `VITE_XAMAN_API_SECRET`
- **Value:** `da81e365-7bbe-4979-a216-ecd5d48185a2`

## How to Add Environment Variables to Netlify

1. **Go to:** https://app.netlify.com/sites/bm-denarii-platform/settings/deploys#environment
   
2. **Click** "Environment variables" in the left sidebar

3. **Click** "Add a variable" or "Add environment variables"

4. **For each variable above:**
   - Enter the **Key** (e.g., `VITE_XAMAN_API_KEY`)
   - Enter the **Value**
   - Select **"All scopes"** or **"All deploy contexts"**
   - Click **"Create variable"** or **"Add"**

5. **After adding all variables**, trigger a new deployment by either:
   - Going to Deploys → Click "Trigger deploy" → "Clear cache and deploy site"
   - Or push a new commit to GitHub

## Current Status

✅ **Local environment (.env):**  All keys configured
✅ **Example file (.env.example):** Updated with placeholders
⏳ **Netlify environment:** Need to manually add Xaman keys

Once you add the Xaman API keys to Netlify and redeploy, your Xaman wallet integration will be fully functional on the live site!
