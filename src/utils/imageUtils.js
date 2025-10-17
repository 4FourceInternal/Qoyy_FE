import CMS_CONFIG from '../config/cms';

/**
 * Helper function to get full image URL from Strapi
 */
export const getImageUrl = (imageData) => {
  if (!imageData) {
    return null;
  }

  // Get the base URL without /api suffix
  const baseUrl = CMS_CONFIG.API_BASE_URL.replace(/\/api$/, '');

  // 1️⃣ Handle Strapi nested structure: image.data.attributes.url
  if (imageData.data && imageData.data.attributes?.url) {
    const url = imageData.data.attributes.url;
    return url.startsWith('http')
      ? url
      : `${baseUrl}${url}`;
  }

  // 2️⃣ Handle direct Strapi object: image.url
  if (imageData.url) {
    const url = imageData.url;
    return url.startsWith('http')
      ? url
      : `${baseUrl}${url}`;
  }

  // 3️⃣ Handle string fallback: "/uploads/..."
  if (typeof imageData === 'string') {
    return imageData.startsWith('http')
      ? imageData
      : `${baseUrl}${imageData}`;
  }

  return null;
};

export default getImageUrl;
