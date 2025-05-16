// Service Worker for Push Notifications and Background Sync
const CACHE_NAME = 'habit-crusher-v1';
const NOTIFICATION_EVENTS = {
    CLICK: 'notificationclick',
    CLOSE: 'notificationclose',
    PUSH: 'push',
    SYNC: 'sync',
    MESSAGE: 'message'
};

// Cache static assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/script.js',
                '/icon.png',
                '/badge.png',
                '/sounds/urgent.mp3',
                '/sounds/high.mp3',
                '/sounds/medium.mp3',
                '/sounds/low.mp3'
            ]);
        })
    );
});

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
