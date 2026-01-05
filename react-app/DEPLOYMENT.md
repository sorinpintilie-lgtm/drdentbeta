# Deployment Guide for DrDent Landing Page

## 🚀 Quick Deploy

### Option 1: Deploy to GitHub Pages (Recommended)

This project includes a GitHub Actions workflow for automatic deployment to GitHub Pages.

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set Source to "Deploy from a branch"
   - Choose `gh-pages` branch and `/ (root)` folder

2. **Push to main/master branch**:
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push origin main
   ```

3. **Automatic Deployment**:
   - GitHub Actions will build and deploy automatically
   - Your site will be available at `https://[username].github.io/[repository-name]`

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy from the react-app directory
cd react-app
netlify deploy --prod
```

### Option 2: Deploy via Git Integration

1. **Push to GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Add Netlify configuration"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose your Git provider and repository
   - Netlify will auto-detect the configuration from `netlify.toml`

3. **Verify Build Settings** (should be auto-configured):
   - **Base directory**: `react-app`
   - **Build command**: `npm run build`
   - **Publish directory**: `react-app/dist`

### Option 3: Manual Deploy via Netlify Drop

```bash
# Build the project
cd react-app
npm run build

# Drag and drop the 'dist' folder to Netlify Drop
# Visit: https://app.netlify.com/drop
```

## 📋 Configuration Files

### `netlify.toml`
Located at `react-app/netlify.toml`, this file configures:
- ✅ Build settings (base directory, publish directory, build command)
- ✅ Client-side routing redirects (all routes → index.html)
- ✅ Security headers (XSS protection, frame options, etc.)
- ✅ Cache headers for optimal performance
- ✅ Asset optimization

### `public/_redirects`
Backup redirect configuration for client-side routing.

### `.nvmrc`
Specifies Node.js version 18 for consistent builds.

## 🔧 Build Configuration

The project uses:
- **Build Tool**: Vite
- **Framework**: React 18 with TypeScript
- **Router**: React Router v6
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion

## 🌐 Environment Variables (Optional)

If you need environment variables, add them in Netlify UI:

1. Go to **Site settings** → **Environment variables**
2. Add variables like:
   - `VITE_API_URL`
   - `VITE_GOOGLE_MAPS_API_KEY`
   - etc.

**Note**: Vite requires environment variables to be prefixed with `VITE_`

## ✅ Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All dependencies are installed: `npm install`
- [ ] Build succeeds locally: `npm run build`
- [ ] Type checking passes: `npm run type-check`
- [ ] Development server works: `npm run dev`
- [ ] All routes are accessible (test navigation)
- [ ] Images and assets load correctly
- [ ] Forms submit properly
- [ ] Mobile responsiveness is verified

## 🔍 Testing the Build Locally

```bash
# Build the project
npm run build

# Preview the production build
npm run preview

# Open http://localhost:4173 in your browser
```

## 🐛 Troubleshooting

### Issue: Routes return 404 on refresh
**Solution**: The `netlify.toml` and `_redirects` files handle this. Ensure they're in place.

### Issue: Build fails with module errors
**Solution**: 
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue: Environment variables not working
**Solution**: Ensure variables are prefixed with `VITE_` and set in Netlify UI.

### Issue: Assets not loading
**Solution**: Check that assets are in the `public` folder and referenced correctly.

## 📊 Performance Optimization

The configuration includes:
- **Asset caching**: 1 year for static assets
- **HTML caching**: No cache for HTML files (always fresh)
- **Image optimization**: Netlify automatically optimizes images
- **Compression**: Gzip/Brotli enabled by default

## 🔒 Security Headers

Configured security headers:
- `X-Frame-Options: DENY` - Prevents clickjacking
- `X-XSS-Protection: 1; mode=block` - XSS protection
- `X-Content-Type-Options: nosniff` - MIME type sniffing protection
- `Referrer-Policy: strict-origin-when-cross-origin` - Referrer control

## 📱 Custom Domain Setup

1. Go to **Domain settings** in Netlify
2. Click **Add custom domain**
3. Enter your domain (e.g., `drdent.ro`)
4. Follow DNS configuration instructions
5. Enable HTTPS (automatic with Let's Encrypt)

## 🎯 Post-Deployment

After deployment:
1. Test all routes: `/`, `/services`, `/team`, `/contact`, etc.
2. Verify forms work correctly
3. Check mobile responsiveness
4. Test page load speed with Lighthouse
5. Verify SEO meta tags
6. Test on different browsers

## 📞 Support

For issues:
- Check [Netlify Documentation](https://docs.netlify.com)
- Review build logs in Netlify dashboard
- Check browser console for errors

## 🎉 Success!

Your DrDent landing page should now be live on Netlify with:
- ✅ Fast global CDN delivery
- ✅ Automatic HTTPS
- ✅ Client-side routing support
- ✅ Optimized assets
- ✅ Security headers
- ✅ Continuous deployment from Git