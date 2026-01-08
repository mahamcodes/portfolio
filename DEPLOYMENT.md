# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages for FREE!

## Prerequisites

- GitHub Account
- Your repository pushed to GitHub

## 🚀 Deployment Steps

### Step 1: Push Your Code to GitHub

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top tab)
3. Scroll down to **Pages** (left sidebar)
4. Under **Build and deployment**:
   - **Source**: Select "GitHub Actions"
5. That's it! The workflow will trigger automatically.

### Step 3: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You'll see "Deploy to GitHub Pages" workflow running
3. Wait 2-3 minutes for it to complete
4. Once done (green checkmark ✓), your site is live!

### Step 4: Access Your Site

Your portfolio will be available at:

**Option A - User/Org site:**

```
https://<username>.github.io/
```

**Option B - Project site (default):**

```
https://<username>.github.io/Portfolio/
```

> **Note:** If deploying to a subpath (Option B), uncomment these lines in `next.config.ts`:
>
> ```typescript
> basePath: '/Portfolio',
> assetPrefix: '/Portfolio/',
> ```

## 📁 Files Configured

| File                           | Purpose                     |
| ------------------------------ | --------------------------- |
| `next.config.ts`               | Static export configuration |
| `.github/workflows/deploy.yml` | GitHub Actions workflow     |
| `public/.nojekyll`             | Prevents Jekyll processing  |

## 🔄 Automatic Deployments

Every push to `main` branch automatically triggers a new deployment!

```bash
# Make changes
git add .
git commit -m "Update portfolio"
git push origin main
# GitHub Actions will automatically deploy!
```

## 🌐 Custom Domain (Optional)

### Using GitHub's Domain Settings

1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter your domain
3. Click **Save**
4. Add DNS records:

**For apex domain (example.com):**

```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
```

**For subdomain (www.example.com):**

```
CNAME   www   <username>.github.io
```

5. Wait for DNS propagation (up to 24 hours)
6. Enable "Enforce HTTPS"

### Using CNAME File

Create a `CNAME` file in `public/` folder:

```
yourdomain.com
```

## 🐛 Troubleshooting

### Build Fails

**Check Actions logs:**

1. Go to **Actions** tab
2. Click on failed workflow
3. Read error messages

**Common issues:**

- Missing dependencies in `package.json`
- TypeScript errors
- Image import issues

### 404 Errors on Routes

For GitHub Pages project sites, ensure `basePath` is set in `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Portfolio", // Your repo name
  assetPrefix: "/Portfolio/",
};
```

### Images Not Loading

- Ensure all images are in `public/` folder
- Use paths starting with `/` (e.g., `/profile.jpg`)
- For project sites, images should work automatically with basePath

### Site Not Updating

1. Check if workflow completed successfully
2. Hard refresh browser (Cmd+Shift+R / Ctrl+Shift+R)
3. Clear browser cache
4. Wait a few minutes for CDN propagation

## 💰 Cost

**GitHub Pages is 100% FREE!**

Includes:

- ✅ Free hosting
- ✅ Free SSL certificate
- ✅ Free custom domain support
- ✅ Unlimited deployments
- ✅ Global CDN

**Limits:**

- 1GB storage
- 100GB bandwidth/month
- 10 builds/hour

More than enough for a portfolio!

## 📊 Checking Deployment Status

1. **GitHub Actions:** Repository → Actions tab
2. **Pages Settings:** Repository → Settings → Pages
3. **Live Site:** Visit your URL

## 🎯 Quick Checklist

- [ ] Code pushed to GitHub
- [ ] GitHub Pages source set to "GitHub Actions"
- [ ] Workflow completed successfully (green ✓)
- [ ] Site accessible at your URL
- [ ] (Optional) Custom domain configured
- [ ] (Optional) HTTPS enforced

## 📚 Useful Links

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

**Your portfolio is ready for GitHub Pages! 🚀**

Just push to GitHub and enable Pages in settings!
