// Service Worker for Push Notifications and Background Sync
const CACHE_NAME = 'habit-tracker-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';
const OFFLINE_PAGE = '/offline.html';

const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/manifest.json',
    '/offline.html',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png',
    '/sounds/notification.mp3',
    '/sounds/achievement.mp3',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// Cache static assets
self.addEventListener('install', event => {
    event.waitUntil(
        Promise.all([
            caches.open(STATIC_CACHE)
                .then(cache => cache.addAll(STATIC_ASSETS)),
            caches.open(CACHE_NAME)
                .then(cache => cache.add(OFFLINE_PAGE))
        ])
    );
});

// Activate Event
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.map(key => {
                    if (key !== CACHE_NAME && key !== STATIC_CACHE && key !== DYNAMIC_CACHE) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
});

// Fetch Event
self.addEventListener('fetch', event => {
    // Handle API requests
    if (event.request.url.includes('/api/')) {
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    const clonedResponse = response.clone();
                    caches.open(DYNAMIC_CACHE)
                        .then(cache => cache.put(event.request, clonedResponse));
                    return response;
                })
                .catch(() => {
                    return caches.match(event.request);
                })
        );
        return;
    }

    // Handle static assets
    if (STATIC_ASSETS.some(asset => event.request.url.includes(asset))) {
        event.respondWith(
            caches.match(event.request)
                .then(response => response || fetch(event.request))
        );
        return;
    }

    // Network-first strategy for other requests
    event.respondWith(
        fetch(event.request)
            .then(response => {
                const clonedResponse = response.clone();
                caches.open(DYNAMIC_CACHE)
                    .then(cache => cache.put(event.request, clonedResponse));
                return response;
            })
            .catch(() => {
                return caches.match(event.request)
                    .then(response => {
                        if (response) {
                            return response;
                        }
                        if (event.request.headers.get('accept').includes('text/html')) {
                            return caches.match(OFFLINE_PAGE);
                        }
                        return new Response('', {
                            status: 408,
                            statusText: 'Request timeout'
                        });
                    });
            })
    );
});

// Push Event
self.addEventListener('push', event => {
    const options = {
        body: event.data.text(),
        icon: '/icons/icon-192x192.png',
        badge: '/icons/badge-72x72.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'view',
                title: 'عرض',
                icon: '/icons/check.png'
            },
            {
                action: 'close',
                title: 'إغلاق',
                icon: '/icons/close.png'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('محطم العادات', options)
    );
});

// Notification Click Event
self.addEventListener('notificationclick', event => {
    event.notification.close();

    if (event.action === 'view') {
        event.waitUntil(
            clients.matchAll({
                type: 'window'
            })
            .then(function(clientList) {
                if (clientList.length > 0) {
                    return clientList[0].focus();
                }
                return clients.openWindow('/');
            })
        );
    }
});

// Background Sync
self.addEventListener('sync', event => {
    if (event.tag === 'sync-habits') {
        event.waitUntil(
            syncHabits()
        );
    }
});

// Helper function to sync habits data
async function syncHabits() {
    try {
        const habitsData = await getHabitsFromIndexedDB();
        if (habitsData) {
            localStorage.setItem('habits', JSON.stringify(habitsData));
        }
    } catch (error) {
        console.error('Error syncing habits:', error);
    }
}

// Helper function to get habits from IndexedDB
async function getHabitsFromIndexedDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('HabitsDB', 1);
        
        request.onerror = () => reject(request.error);
        request.onsuccess = () => {
            const db = request.result;
            const transaction = db.transaction(['habits'], 'readonly');
            const store = transaction.objectStore('habits');
            const getRequest = store.getAll();
            
            getRequest.onsuccess = () => resolve(getRequest.result);
            getRequest.onerror = () => reject(getRequest.error);
        };
    });
}

// Enhanced Push Notification Handler
self.addEventListener('push', function(event) {
    if (event.data) {
        const data = event.data.json();
        const options = {
            body: data.message || 'حان وقت تسجيل تقدمك اليومي!',
            icon: '/icon.png',
            badge: '/badge.png',
            dir: 'rtl',
            lang: 'ar',
            vibrate: [100, 50, 100],
            data: {
                dateOfArrival: Date.now(),
                primaryKey: data.id || 1,
                category: data.category || 'reminder',
                priority: data.priority || 1,
                ...data.data
            },
            actions: data.actions || [
                {
                    action: 'open',
                    title: 'فتح التطبيق'
                },
                {
                    action: 'close',
                    title: 'إغلاق'
                }
            ],
            // Make notification persistent based on priority
            requireInteraction: data.priority >= 2,
            // Show notification even if the app is in foreground
            silent: false,
            // Add tag for notification grouping
            tag: data.category || 'default',
            // Allow multiple notifications from same tag
            renotify: true
        };

        // Play different sounds based on priority
        if (data.priority >= 3) { // Urgent
            options.sound = '/sounds/urgent.mp3';
        } else if (data.priority === 2) { // High
            options.sound = '/sounds/high.mp3';
        }

        event.waitUntil(
            self.registration.showNotification(data.title || 'محطم العادات السيئة', options)
        );
    }
});

// Enhanced Notification Click Handler
self.addEventListener('notificationclick', function(event) {
    event.notification.close();

    // Handle different actions
    if (event.action === 'open') {
        // Open the app and focus on specific section if needed
        const urlToOpen = new URL('/', self.location.origin).href;
        
        event.waitUntil(
            clients.matchAll({
                type: 'window',
                includeUncontrolled: true
            }).then((windowClients) => {
                // If a window client is available, focus it
                for (let client of windowClients) {
                    if (client.url === urlToOpen && 'focus' in client) {
                        return client.focus();
                    }
                }
                // If no window client is available, open a new window
                if (clients.openWindow) {
                    return clients.openWindow(urlToOpen);
                }
            })
        );
    } else if (event.action === 'share') {
        // Handle share action
        const shareData = event.notification.data;
        if (shareData && navigator.share) {
            navigator.share({
                title: shareData.title,
                text: shareData.message,
                url: self.location.origin
            }).catch(console.error);
        }
    }

    // Send message to the app about the notification interaction
    const data = event.notification.data;
    if (data) {
        self.clients.matchAll().then(clients => {
            clients.forEach(client => {
                client.postMessage({
                    type: 'NOTIFICATION_INTERACTION',
                    action: event.action,
                    notificationId: data.primaryKey,
                    category: data.category,
                    timestamp: Date.now()
                });
            });
        });
    }
});

// Handle notification close
self.addEventListener('notificationclose', function(event) {
    const data = event.notification.data;
    if (data) {
        // Send message to the app about notification dismissal
        self.clients.matchAll().then(clients => {
            clients.forEach(client => {
                client.postMessage({
                    type: 'NOTIFICATION_DISMISSED',
                    notificationId: data.primaryKey,
                    category: data.category,
                    timestamp: Date.now()
                });
            });
        });
    }
});

// Handle messages from the client
self.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'PUSH_NOTIFICATION') {
        const notificationData = event.data.data;
        
        const options = {
            body: notificationData.message || 'حان وقت تسجيل تقدمك اليومي!',
            icon: '/icon.png',
            badge: '/badge.png',
            dir: 'rtl',
            lang: 'ar',
            vibrate: [100, 50, 100],
            data: {
                dateOfArrival: Date.now(),
                primaryKey: notificationData.id || Date.now(),
                category: notificationData.category || 'realtime',
                priority: notificationData.priority || 2,
                ...notificationData.data
            },
            actions: notificationData.actions || [
                {
                    action: 'open',
                    title: 'فتح التطبيق'
                },
                {
                    action: 'close',
                    title: 'إغلاق'
                }
            ],
            requireInteraction: notificationData.requireInteraction || true,
            silent: false,
            tag: `realtime-${Date.now()}`,
            renotify: true,
            timestamp: Date.now()
        };

        // Play different sounds based on priority
        if (notificationData.priority >= 3) {
            options.sound = '/sounds/urgent.mp3';
        } else if (notificationData.priority === 2) {
            options.sound = '/sounds/high.mp3';
        }

        self.registration.showNotification(notificationData.title || 'إشعار جديد', options);
    }
});

// Enhanced background sync for realtime notifications
self.addEventListener('sync', function(event) {
    if (event.tag === 'sync-notifications') {
        event.waitUntil(
            syncPendingNotifications()
        );
    } else if (event.tag === 'realtime-sync') {
        event.waitUntil(
            syncRealtimeNotifications()
        );
    }
});

// Function to sync realtime notifications
async function syncRealtimeNotifications() {
    try {
        const pendingRealtimeNotifications = await getPendingRealtimeNotifications();
        for (const notification of pendingRealtimeNotifications) {
            await sendNotification(notification);
            await markNotificationAsSynced(notification.id);
        }
    } catch (error) {
        console.error('Error syncing realtime notifications:', error);
    }
}

// Helper function to get pending realtime notifications
async function getPendingRealtimeNotifications() {
    // Implementation would use IndexedDB to store and retrieve pending realtime notifications
    return [];
}

// Helper function to mark notification as synced
async function markNotificationAsSynced(notificationId) {
    // Implementation would use IndexedDB to mark notifications as synced
}

// Cache management
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch handler for offline support
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
}); 
