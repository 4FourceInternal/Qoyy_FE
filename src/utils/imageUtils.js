import CMS_CONFIG from '../config/cms';

/**
 * Helper function to get full image URL from Strapi
 * @param {Object|string|null} imageData - Strapi image object or string URL
 * @returns {string|null} Full image URL or null if no valid image data
 */
export const getImageUrl = (imageData) => {
  if (!imageData) return null;
  
  // If it's already a string (local fallback), return as is
  if (typeof imageData === 'string') return imageData;
  
  // If it's a Strapi image object, construct the full URL
  if (imageData.url) {
    // Check if it's already a full URL
    if (imageData.url.startsWith('http')) {
      return imageData.url;
    }
    // Construct full URL from Strapi base (remove /api from the end)
    const baseUrl = CMS_CONFIG.API_BASE_URL.replace('/api', '');
    return `${baseUrl}${imageData.url}`;
  }
  
  return null;
};

export default getImageUrl;
