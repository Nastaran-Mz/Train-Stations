#!/bin/bash
# Build React project with Vite and deploy to Netlify production

echo "🔹 Building project..."
npm run build || { echo "❌ Build failed!"; exit 1; }

echo "🔹 Deploying to Netlify production..."
netlify deploy --dir=dist --prod --message="Update React App" || { echo "❌ Deploy failed!"; exit 1; }

echo "✅ Deploy complete! Your site is live at: https://trainstationgermany.netlify.app"
