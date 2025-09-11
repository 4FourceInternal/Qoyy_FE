// CMS Configuration
const normalizeApiBaseUrl = (rawUrl) => {
  const base = (rawUrl || 'http://localhost:1337').replace(/\/$/, '');
  return base.endsWith('/api') ? base : `${base}/api`;
};

export const CMS_CONFIG = {
  // Strapi backend URL (ensure it includes /api)
  API_BASE_URL: normalizeApiBaseUrl(import.meta.env.VITE_STRAPI_URL),
  
  // Strapi API Token for authentication
  API_TOKEN: import.meta.env.VITE_STRAPI_API_TOKEN || null,
  
  // API timeout in milliseconds
  API_TIMEOUT: parseInt(import.meta.env.VITE_API_TIMEOUT) || 10000,
  
  // Enable/disable CMS integration
  ENABLE_CMS: import.meta.env.VITE_ENABLE_CMS !== 'false',
  
  // Fallback to local content if CMS is not available (DISABLED for dynamic content)
  FALLBACK_TO_LOCAL: false,
  
  // Cache duration in milliseconds (5 minutes)
  CACHE_DURATION: 5 * 60 * 1000,
  
  // Check if API token is configured
  get hasApiToken() {
    return !!this.API_TOKEN;
  },
  
  // Get authorization header if token exists
  get authHeader() {
    return this.API_TOKEN ? { Authorization: `Bearer ${this.API_TOKEN}` } : {};
  }
};

export default CMS_CONFIG;
