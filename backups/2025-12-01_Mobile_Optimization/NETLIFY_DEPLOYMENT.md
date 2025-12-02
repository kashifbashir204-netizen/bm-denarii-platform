# Netlify Deployment Instructions

## ✅ Code Successfully Pushed to GitHub

Your BM Denarii platform code is now live on GitHub:
**Repository:** https://github.com/kashifbashir204-netizen/bm-denarii-platform

---

## 🚀 Next Steps: Connect GitHub to Netlify

### Step 1: Log In to Netlify
1. Go to: **https://app.netlify.com/login**
2. Log in using your **email and password** (NOT the GitHub button)

### Step 2: Connect Your Repository
1. After logging in, navigate to: **https://app.netlify.com/sites/bm-denarii-platform/settings/deploys**
2. Click **"Link site to Git"** or **"Change repository"**
3. Select **GitHub** as the source
4. **Authorize Netlify** if prompted by GitHub
5. Select repository: **kashifbashir204-netizen/bm-denarii-platform**
6. Select branch: **main**

### Step 3: Verify Build Settings
The build settings should auto-detect from `netlify.toml`:
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Branch:** main

If not auto-detected, enter these values manually.

### Step 4: Add Environment Variable (CRITICAL!)
1. Go to: **Site settings → Environment variables**
2. Click **"Add variable"**
3. **Key:** `VITE_OPENAI_API_KEY`
4. **Value:** Your OpenAI API key (find it in your local `.env` file)
5. Click **"Save"**

### Step 5: Deploy
1. Click **"Save"** or **"Deploy site"**
2. Netlify will automatically build and deploy your site
3. The build will take 2-3 minutes
4. Once complete, you'll get a live URL like: `https://bm-denarii-platform.netlify.app`

---

## 🔍 Troubleshooting

### If Build Fails:
- Check that the environment variable `VITE_OPENAI_API_KEY` is set correctly
- View the build logs in Netlify dashboard for specific errors
- Verify the build settings match the values above

### If GitHub Connection Fails:
- Make sure you're logged in to Netlify with the same email as your GitHub
- Try disconnecting and reconnecting GitHub in Netlify user settings
- Ensure you authorized Netlify when prompted by GitHub

---

## 📧 Your OpenAI API Key

Find your API key in the `.env` file at:
`c:\Users\Pc\Downloads\BM Denarii\.env`

The line will look like:
```
VITE_OPENAI_API_KEY=sk-proj-...
```

Copy everything after the `=` sign.

---

## 🎉 After Deployment

Once deployed, your site will be live at a Netlify URL. You can:
- Test all AI features with your OpenAI API key
- Share the URL with the community
- Set up a custom domain if desired
- Enable auto-deploys (already configured via Git integration)

Every time you push to the `main` branch on GitHub, Netlify will automatically rebuild and deploy your site!

---

**Ready to proceed? Log in to Netlify and let me know if you need any help!**
