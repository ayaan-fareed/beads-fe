# Strapi GitHub Deployment Guide

## 🚀 Complete Guide to Deploy Local Strapi to GitHub & Production

### Step 1: Prepare Your Local Strapi Project

#### 1.1 Initialize Git Repository
```bash
# Navigate to your Strapi project directory
cd /path/to/your/strapi-project

# Initialize git
git init
git add .
git commit -m "Initial commit - Local Strapi setup"
```

#### 1.2 Create .gitignore File
Create `.gitignore` in your Strapi root:
```gitignore
# Dependencies
node_modules/
.yarn/

# Environment variables
.env
.env.local
.env.production

# Build outputs
.cache/
.tmp/
build/
dist/

# Database
*.sqlite
*.sqlite-journal

# Logs
logs/
*.log

# OS generated
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/

# Strapi specific
public/uploads/
```

### Step 2: Set Up Production Environment Variables

#### 2.1 Create Production Environment File
Create `.env.production`:
```env
NODE_ENV=production
HOST=0.0.0.0
PORT=1337

# Database (choose one)
# PostgreSQL (recommended for production)
DATABASE_CLIENT=postgres
DATABASE_HOST=your-db-host
DATABASE_PORT=5432
DATABASE_NAME=strapi
DATABASE_USERNAME=your-db-user
DATABASE_PASSWORD=your-db-password
DATABASE_SSL=true

# OR MySQL
# DATABASE_CLIENT=mysql
# DATABASE_HOST=your-db-host
# DATABASE_PORT=3306
# DATABASE_NAME=strapi
# DATABASE_USERNAME=your-db-user
# DATABASE_PASSWORD=your-db-password

# App Keys (generate new ones for production)
APP_KEYS=your-app-key-1,your-app-key-2
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
JWT_SECRET=your-jwt-secret

# External Services
CLOUDINARY_NAME=your-cloudinary-name
CLOUDINARY_KEY=your-cloudinary-key
CLOUDINARY_SECRET=your-cloudinary-secret
```

#### 2.2 Generate New App Keys
```bash
# Generate secure keys
npx strapi generate-new-app-keys
```

### Step 3: Configure Strapi for Production

#### 3.1 Update config/database.js
```javascript
// config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: env('DATABASE_CLIENT', 'sqlite'),
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USER', ''),
      password: env('DATABASE_PASSWORD', ''),
      ssl: env.bool('DATABASE_SSL', false),
    },
    useNullAsDefault: true,
  },
});
```

#### 3.2 Update config/server.js
```javascript
// config/server.js
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'http://localhost:1337'),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
```

### Step 4: Choose Deployment Platform

#### Option A: Railway (Recommended for Strapi)
1. Sign up at [railway.app](https://railway.app)
2. Install Railway CLI: `npm install -g @railway/cli`
3. Login: `railway login`
4. Deploy: `railway up`

#### Option B: Vercel
1. Sign up at [vercel.com](https://vercel.com)
2. Install Vercel CLI: `npm install -g vercel`
3. Deploy: `vercel --prod`

#### Option C: DigitalOcean App Platform
1. Create account at [digitalocean.com](https://digitalocean.com)
2. Connect GitHub repository
3. Configure app settings

#### Option D: Heroku
1. Sign up at [heroku.com](https://heroku.com)
2. Install Heroku CLI: `npm install -g heroku`
3. Create app: `heroku create your-app-name`
4. Deploy: `git push heroku main`

### Step 5: Set Up Production Database

#### 5.1 PostgreSQL Setup (Recommended)
**Railway:** Add PostgreSQL service from marketplace
**DigitalOcean:** Create Managed PostgreSQL Database
**Heroku:** Add Heroku Postgres add-on

#### 5.2 Update Database Connection
Update your deployment platform's environment variables with database credentials.

### Step 6: Deploy to Production

#### 6.1 Push to GitHub
```bash
# Create GitHub repository first on github.com
git remote add origin https://github.com/yourusername/your-strapi-project.git
git branch -M main
git push -u origin main
```

#### 6.2 Deploy Commands
**Railway:**
```bash
railway link
railway up
```

**Vercel:**
```bash
vercel --prod
```

**Heroku:**
```bash
heroku config:set NODE_ENV=production
git push heroku main
```

### Step 7: Update React App for Production

#### 7.1 Update React Environment
In your React app's `.env`:
```env
VITE_STRAPI_URL=https://your-strapi-app.railway.app
VITE_STRAPI_TOKEN=your-production-api-token
```

#### 7.2 Deploy React App
Deploy your React app to Vercel/Netlify with the new Strapi URL.

### Step 8: Post-Deployment Checklist

#### 8.1 Verify Strapi Admin
- Access admin panel at `https://your-domain.com/admin`
- Create admin user
- Verify content types are working

#### 8.2 Test API Endpoints
```bash
curl https://your-domain.com/api/articles
```

#### 8.3 Update API Token
- Create new API token in production Strapi
- Update React app environment variables
- Restart React app

### 🚨 Important Notes

1. **Never commit sensitive data** like database passwords to GitHub
2. **Use PostgreSQL** for production (SQLite is not suitable)
3. **Set up backups** for your production database
4. **Monitor performance** and set up alerts
5. **Update CORS settings** in Strapi admin for your React app domain

### 📱 Quick Deployment Commands

```bash
# Complete deployment workflow
git add .
git commit -m "Production ready"
git push origin main

# Railway
railway up

# Vercel (for React app)
cd ../elegant-beads-react
vercel --prod
```

### 🔗 Useful Links

- [Strapi Deployment Docs](https://docs.strapi.io/developer-cloud-sdk/getting-started/deployment.html)
- [Railway Strapi Guide](https://docs.railway.app/guides/frameworks/strapi)
- [Vercel Strapi Deployment](https://vercel.com/guides/deploying-strapi)

This guide will get your local Strapi instance deployed to production and connected with your React app!
