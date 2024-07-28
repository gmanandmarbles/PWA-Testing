self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
    // Precache or perform other install steps here if needed
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activating.');
});

self.addEventListener('fetch', (event) => {
    // Handle network requests here if needed
});
