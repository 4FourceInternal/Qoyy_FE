# Dynamic Content Setup Guide

This guide will help you transform your frontend from hardcoded content to completely dynamic content managed through Strapi CMS.

## 🎯 What We're Achieving

- ✅ **100% Dynamic Content**: No more hardcoded fallbacks
- ✅ **CMS-First Approach**: All content comes from Strapi
- ✅ **Real-time Updates**: Change content in CMS, see it immediately on frontend
- ✅ **Professional Workflow**: Content editors can manage content without touching code

## 🚀 Step-by-Step Setup

### Step 1: Prepare Your Environment

1. **Set API Token Environment Variable**
   ```bash
   # Windows (PowerShell)
   $env:STRAPI_API_TOKEN="your_actual_token_here"
   
   # Or create a .env file in backend-strapi/
   STRAPI_API_TOKEN=your_actual_token_here
   ```

2. **Ensure Strapi Backend is Running**
   ```bash
   cd backend-strapi
   npm run develop
   ```

### Step 2: Seed All Content

1. **Run the Seeding Script**
   ```bash
   cd backend-strapi
   
   # Option 1: Use the batch file (Windows)
   seed-content.bat
   
   # Option 2: Use npm script directly
   npm run seed:all
   ```

2. **Verify Content Creation**
   - Go to `http://localhost:1337/admin`
   - Check Content Manager
   - You should see all content types populated

### Step 3: Test Dynamic Frontend

1. **Start Your Frontend**
   ```bash
   cd 4Fource-Qoyy
   npm run dev
   ```

2. **Check for Dynamic Content**
   - Look for the 🔑 Debug Token button
   - Click it to verify API token is working
   - Check browser console for successful API calls

## 🔧 Configuration Changes Made

### 1. CMS Configuration (`src/config/cms.js`)
- Disabled fallback to local content
- Added API token support
- Enhanced error handling

### 2. CMS Service (`src/services/cmsService.js`)
- Removed fallback logic
- Added proper error handling
- Enhanced authentication headers

### 3. CMS Hook (`src/hooks/useCMSData.js`)
- Simplified to only fetch from CMS
- Better error handling
- No more local content fallback

## 📊 Content Structure Seeded

### Global Content
- **Header**: Brand, navigation links
- **Footer**: Company info, quick links, social media, contact
- **SEO**: Default meta tags and social sharing

### Page-Specific Content
- **Home**: Hero section, SEO
- **About**: Company story, approach, team info
- **Services**: Service cards, features, CTA
- **Info**: FAQs, process, why choose us
- **Contact**: Contact info, buttons, offers

## 🚨 Error Handling

### Common Issues & Solutions

#### 1. "CMS is disabled" Error
```bash
# Check your .env file
VITE_ENABLE_CMS=true
VITE_STRAPI_API_TOKEN=your_token_here
```

#### 2. "Failed to fetch content from CMS" Error
- Verify Strapi backend is running
- Check API token is valid
- Ensure content is published in Strapi
- Check browser console for detailed errors

#### 3. "Unauthorized" or "Forbidden" Errors
- Verify API token permissions
- Check Strapi role permissions
- Ensure content types are accessible

#### 4. Content Not Loading
- Check if content exists in Strapi
- Verify content is published
- Check populate parameters in API calls

## 🔍 Debugging Tools

### 1. Debug Panel
- Click the 🔑 Debug Token button
- Check token status and configuration
- Test API connectivity
- View environment variables

### 2. Browser Console
- Look for detailed error messages
- Check network requests
- Verify API responses

### 3. Strapi Admin Panel
- Check content manager
- Verify permissions
- Check API tokens

## 📝 Content Management Workflow

### For Content Editors
1. **Login to Strapi Admin**: `http://localhost:1337/admin`
2. **Navigate to Content Manager**
3. **Select Content Type** (Home, About, Services, etc.)
4. **Edit Content** using the visual editor
5. **Save and Publish** changes
6. **View Changes** on frontend immediately

### For Developers
1. **Content Structure**: Modify content types in Strapi
2. **Frontend Integration**: Update components to use new fields
3. **Testing**: Verify changes work in both CMS and frontend

## 🚀 Production Deployment

### 1. Environment Variables
```env
VITE_STRAPI_URL=https://your-production-strapi.com/api
VITE_STRAPI_API_TOKEN=your_production_token
VITE_ENABLE_CMS=true
```

### 2. Strapi Backend
- Deploy to your hosting provider
- Set up production database
- Configure CORS for production domain
- Create production API tokens

### 3. Frontend
- Build and deploy to your hosting
- Ensure environment variables are set
- Test all content types work

## 🔄 Content Updates

### Real-time Updates
- Changes in Strapi appear immediately on frontend
- No need to restart servers
- Content is cached for performance
- Cache automatically refreshes

### Bulk Updates
- Use Strapi's bulk edit features
- Import/export content via API
- Use the seeding script for major updates

## 📱 Testing Checklist

- [ ] Home page loads content from CMS
- [ ] About page displays company information
- [ ] Services page shows service cards
- [ ] Info page displays FAQs and process
- [ ] Contact page shows contact information
- [ ] Header and footer are dynamic
- [ ] SEO meta tags are populated
- [ ] No hardcoded content visible
- [ ] API token is working
- [ ] Error handling works properly

## 🆘 Troubleshooting

### If Nothing Works
1. **Check Strapi Backend**: Is it running? Can you access admin?
2. **Verify API Token**: Is it valid? Does it have permissions?
3. **Check Environment**: Are variables set correctly?
4. **Review Console**: What errors are you seeing?
5. **Test API**: Can you make direct API calls?

### Getting Help
1. Check the browser console for error messages
2. Use the debug panel to verify configuration
3. Test API endpoints directly
4. Check Strapi logs for backend issues
5. Verify content exists and is published

## 🎉 Success Indicators

You'll know everything is working when:
- ✅ Frontend loads completely from CMS
- ✅ No hardcoded content visible
- ✅ Changes in Strapi appear on frontend
- ✅ API token is validated and working
- ✅ All pages display dynamic content
- ✅ No fallback errors in console

## 🔮 Next Steps

Once dynamic content is working:
1. **Customize Content**: Update text, images, and structure
2. **Add New Fields**: Extend content types as needed
3. **Optimize Performance**: Adjust cache settings
4. **Add Features**: Implement search, filtering, etc.
5. **Content Workflows**: Set up approval processes

---

**Need Help?** Check the debug panel, browser console, and Strapi admin panel for detailed error information.
