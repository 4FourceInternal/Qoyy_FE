# API Token Setup Guide for Strapi CMS

This guide will help you create and configure an API token in Strapi to secure your frontend API calls.

## Step 1: Create API Token in Strapi

### 1.1 Start Strapi Backend
```bash
cd backend-strapi
npm run develop
```

### 1.2 Access Admin Panel
- Open your browser and go to: `http://localhost:1337/admin`
- Log in with your admin credentials

### 1.3 Create API Token
1. Go to **Settings** → **API Tokens**
2. Click **Create new API Token**
3. Fill in the details:
   - **Name**: `Frontend API Token`
   - **Description**: `Token for frontend to access public content`
   - **Token duration**: `Unlimited` (recommended for development)
   - **Token type**: `Read-only` (if you only need to read content) or `Full access` (if you need to create/update content)
4. Click **Save**
5. **IMPORTANT**: Copy the generated token immediately (you won't see it again!)

## Step 2: Configure Frontend Environment

### 2.1 Create .env File
Create a `.env` file in your frontend root directory (`4Fource-Qoyy/`):

```env
# Strapi backend URL
VITE_STRAPI_URL=http://localhost:1337/api

# Strapi API Token (replace with your actual token)
VITE_STRAPI_API_TOKEN=your_actual_token_here

# Enable/disable CMS integration
VITE_ENABLE_CMS=true

# API timeout in milliseconds
VITE_API_TIMEOUT=10000
```

### 2.2 Replace Token
Replace `your_actual_token_here` with the actual token you copied from Strapi.

## Step 3: Configure Strapi Permissions

### 3.1 Set Public Permissions
1. In Strapi admin, go to **Settings** → **Users & Permissions Plugin** → **Roles**
2. Select the **Public** role
3. For each content type (home, about, services, etc.), enable:
   - `find` - to list content
   - `findOne` - to get single content
4. Click **Save**

### 3.2 Set Authenticated Permissions (Optional)
If you want to use the API token for additional permissions:
1. Go to **Settings** → **Users & Permissions Plugin** → **Roles**
2. Select the **Authenticated** role
3. Enable the same permissions as Public
4. Click **Save**

## Step 4: Test the Setup

### 4.1 Restart Frontend
After creating the `.env` file, restart your frontend development server:
```bash
cd 4Fource-Qoyy
npm run dev
```

### 4.2 Check Browser Console
Open your browser's developer tools and check the console for:
- Successful API calls with authentication headers
- No more permission errors

### 4.3 Verify API Calls
In the Network tab of dev tools, you should see:
- API requests to Strapi with `Authorization: Bearer <your_token>` header
- Successful responses (200 status codes)

## Step 5: Security Best Practices

### 5.1 Environment Variables
- Never commit your `.env` file to version control
- Add `.env` to your `.gitignore` file
- Use different tokens for development, staging, and production

### 5.2 Token Management
- Use read-only tokens when possible
- Set expiration dates for production tokens
- Rotate tokens regularly
- Monitor token usage

### 5.3 CORS Configuration
Ensure your Strapi backend allows requests from your frontend domain:

In `backend-strapi/config/middlewares.ts`:
```typescript
export default [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
```

In `backend-strapi/config/middlewares.ts` (if you need custom CORS):
```typescript
export default [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https:'],
          'media-src': ["'self'", 'data:', 'blob:', 'https:'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
```

## Troubleshooting

### Common Issues

#### 1. "Forbidden" or "Unauthorized" Errors
- Check if the API token is correct
- Verify the token hasn't expired
- Ensure permissions are set correctly in Strapi

#### 2. CORS Errors
- Check if your frontend domain is allowed in Strapi CORS settings
- Verify the backend is running and accessible

#### 3. Environment Variables Not Loading
- Ensure variables are prefixed with `VITE_`
- Restart your development server after changing `.env`
- Check that the `.env` file is in the correct location

#### 4. Token Not Working
- Verify the token was copied correctly
- Check if the token has the right permissions
- Ensure the token type matches your needs (read-only vs full access)

### Debug Steps

1. **Check Token in Browser**:
   ```javascript
   // In browser console
   console.log('API Token:', import.meta.env.VITE_STRAPI_API_TOKEN);
   console.log('CMS Config:', import.meta.env.VITE_STRAPI_URL);
   ```

2. **Check Network Requests**:
   - Open DevTools → Network tab
   - Look for API calls to Strapi
   - Verify the Authorization header is present

3. **Check Strapi Logs**:
   - Look at your Strapi terminal for any error messages
   - Check Strapi admin panel for permission issues

## Production Deployment

### 1. Update Environment Variables
```env
VITE_STRAPI_URL=https://your-production-strapi.com/api
VITE_STRAPI_API_TOKEN=your_production_token
```

### 2. Update CORS Settings
Configure Strapi to allow your production domain.

### 3. Use Environment-Specific Tokens
Create separate tokens for different environments.

## Support

If you continue to have issues:
1. Check the browser console for error messages
2. Verify Strapi backend is running and accessible
3. Double-check all environment variables
4. Ensure content permissions are set correctly in Strapi
5. Check that your content is published in Strapi
