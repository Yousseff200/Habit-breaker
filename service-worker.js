// Service Worker for Push Notifications and Background Sync
self.addEventListener('push', function(event) {
    const options = {
        body: event.data ? event.data.text() : 'حان وقت تسجيل تقدمك اليومي!',
        icon: '/icon.png',
        badge: '/badge.png',
        dir: 'rtl',
        lang: 'ar',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'open',
                title: 'فتح التطبيق'
            },
            {
                action: 'close',
                title: 'إغلاق'
            }
        ],
        // Make notification persistent
        requireInteraction: true,
        // Show notification even if the app is in foreground
        silent: false
    };

    event.waitUntil(
        self.registration.showNotification('محطم العادات السيئة', options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();

    if (event.action === 'open' || !event.action) {
        // Focus on existing window if available, otherwise open new one
        event.waitUntil(
            clients.matchAll({
                type: 'window',
                includeUncontrolled: true
            }).then(function(clientList) {
                for (let i = 0; i < clientList.length; i++) {
                    const client = clientList[i];
                    if ('focus' in client) {
                        return client.focus();
                    }
                }
                if (clients.openWindow) {
                    return clients.openWindow('/');
                }
            })
        );
    }
});

// Handle periodic background sync
self.addEventListener('periodicsync', function(event) {
    if (event.tag === 'check-habit-progress') {
        event.waitUntil(checkAndSendNotification());
    }
});

// Function to check progress and send notification if needed
async function checkAndSendNotification() {
    const now = new Date();
    const hour = now.getHours();

    // Send morning reminder (9 AM)
    if (hour === 9) {
        await self.registration.showNotification('محطم العادات السيئة', {
            body: 'صباح الخير! لا تنس تسجيل تقدمك اليوم 🌟',
            icon: '/icon.png',
            badge: '/badge.png',
            dir: 'rtl',
            lang: 'ar',
            requireInteraction: true
        });
    }
    // Send evening reminder (8 PM)
    else if (hour === 20) {
        await self.registration.showNotification('محطم العادات السيئة', {
            body: 'مساء الخير! هل سجلت تقدمك اليوم؟ 🌙',
            icon: '/icon.png',
            badge: '/badge.png',
            dir: 'rtl',
            lang: 'ar',
            requireInteraction: true
        });
    }
}

// Cache name
const CACHE_NAME = 'habit-crusher-v1';

// Resources to cache
const RESOURCES_TO_CACHE = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/manifest.json',
    '/icons/icon-72x72.png',
    '/icons/icon-96x96.png',
    '/icons/icon-128x128.png',
    '/icons/icon-144x144.png',
    '/icons/icon-152x152.png',
    '/icons/icon-192x192.png',
    '/icons/icon-384x384.png',
    '/icons/icon-512x512.png'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(RESOURCES_TO_CACHE))
            .then(() => self.skipWaiting())
    );
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        Promise.all([
            // Clean old caches
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames
                        .filter(cacheName => cacheName !== CACHE_NAME)
                        .map(cacheName => caches.delete(cacheName))
                );
            }),
            // Take control of all pages immediately
            self.clients.claim()
        ])
    );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
            .catch(() => {
                // Return offline page if network request fails
                if (event.request.mode === 'navigate') {
                    return caches.match('/');
                }
            })
    );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
    event.notification.close();

    // Handle different actions
    if (event.action === 'open' || !event.action) {
        // Focus on existing window if available, otherwise open new one
        event.waitUntil(
            clients.matchAll({
                type: 'window',
                includeUncontrolled: true
            }).then(clientList => {
                for (let i = 0; i < clientList.length; i++) {
                    const client = clientList[i];
                    if (client.url.includes(self.registration.scope) && 'focus' in client) {
                        return client.focus();
                    }
                }
                return clients.openWindow(self.registration.scope);
            })
        );
    }
});

// Handle notification close
self.addEventListener('notificationclose', function(event) {
    // You can add analytics here if needed
    console.log('Notification was closed', event.notification);
});

// Background Sync for offline support
self.addEventListener('sync', function(event) {
    if (event.tag === 'habit-update') {
        event.waitUntil(
            // Sync habit data when online
            self.clients.matchAll().then(function(clients) {
                clients.forEach(function(client) {
                    client.postMessage({
                        type: 'sync-complete'
                    });
                });
            })
        );
    }
}); 
