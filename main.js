document.addEventListener('DOMContentLoaded', () => {
    const setBadgeButton = document.getElementById('setBadge');
    const clearBadgeButton = document.getElementById('clearBadge');

    // Check for Badges API support
    if ('setAppBadge' in navigator) {
        setBadgeButton.addEventListener('click', () => {
            navigator.setAppBadge(5).then(() => {
                console.log('Badge set to 5');
            }).catch((error) => {
                console.error('Failed to set badge:', error);
            });
        });

        clearBadgeButton.addEventListener('click', () => {
            navigator.clearAppBadge().then(() => {
                console.log('Badge cleared');
            }).catch((error) => {
                console.error('Failed to clear badge:', error);
            });
        });
    } else {
        console.log('Badges API not supported');
    }
});

// Register the service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
        }).catch((error) => {
            console.error('Service Worker registration failed:', error);
        });
}
