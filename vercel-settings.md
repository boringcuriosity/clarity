# Vercel Deployment Settings for ClarityConnect

## Basic Settings
- **Framework Preset**: Vite
- **Root Directory**: ./ (the repository root)
- **Build Command**: npm run build
- **Output Directory**: dist
- **Install Command**: npm install
- **Development Command**: npm run dev

## Environment Variables
Make sure any environment variables used in your application are properly set in the Vercel dashboard under "Project Settings" > "Environment Variables".

## Using Existing Configuration
Your current `vercel.json` file already defines:
- Build configuration using @vercel/node for the server
- Proper routing for static assets, API endpoints, and client-side routing

## Resolving Configuration Differences
When you see "Configuration Settings in the current Production deployment differ from your current Project Settings":

1. Click the "Update" button in Vercel to adopt your current settings
2. Or manually update your project settings in the Vercel dashboard to match the settings above

Remember that after updating the settings, you should redeploy your application for the changes to take effect.