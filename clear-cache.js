// Clear Cache and Refresh CMS Data
// Run this in browser console to clear cache and refresh

console.log('🧹 Clearing cache and refreshing CMS data...');

// Clear localStorage
localStorage.clear();
console.log('✅ localStorage cleared');

// Clear sessionStorage
sessionStorage.clear();
console.log('✅ sessionStorage cleared');

// Clear any service worker caches
if ('caches' in window) {
  caches.keys().then(names => {
    names.forEach(name => {
      caches.delete(name);
      console.log(`🗑️ Cache deleted: ${name}`);
    });
  });
}

// Force reload the page
console.log('🔄 Reloading page to refresh CMS data...');
setTimeout(() => {
  window.location.reload(true);
}, 1000);
