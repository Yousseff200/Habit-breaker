// WebSocket Configuration
class NotificationWebSocket {
    constructor() {
        this.socket = null;
        this.reconnectAttempts = 0;
        this.maxReconnectAttempts = 5;
        this.reconnectDelay = 3000; // 3 seconds
        this.handlers = new Map();
        this.connect();
    }

    connect() {
        try {
            // Use secure WebSocket if the site is served over HTTPS
            const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
            const host = window.location.hostname;
            const port = '8080'; // Your WebSocket server port
            this.socket = new WebSocket(`${protocol}//${host}:${port}`);
            
            this.socket.onopen = () => {
                console.log('WebSocket connection established');
                this.reconnectAttempts = 0;
                this.emit('connection', { status: 'connected' });
            };

            this.socket.onmessage = (event) => {
                try {
                    const data = JSON.parse(event.data);
                    this.handleNotification(data);
                } catch (error) {
                    console.error('Error parsing WebSocket message:', error);
                }
            };

            this.socket.onclose = () => {
                console.log('WebSocket connection closed');
                this.attemptReconnect();
            };

            this.socket.onerror = (error) => {
                console.error('WebSocket error:', error);
                this.emit('error', error);
            };

        } catch (error) {
            console.error('Error creating WebSocket connection:', error);
            this.attemptReconnect();
        }
    }

    attemptReconnect() {
        if (this.reconnectAttempts < this.maxReconnectAttempts) {
            this.reconnectAttempts++;
            console.log(`Attempting to reconnect (${this.reconnectAttempts}/${this.maxReconnectAttempts})...`);
            
            setTimeout(() => {
                this.connect();
            }, this.reconnectDelay * this.reconnectAttempts);
        } else {
            console.error('Max reconnection attempts reached');
            this.emit('maxReconnectAttemptsReached');
        }
    }

    handleNotification(data) {
        switch (data.type) {
            case 'notification':
                this.emit('notification', data);
                // Send to service worker for push notification
                if ('serviceWorker' in navigator) {
                    navigator.serviceWorker.ready.then(registration => {
                        registration.active.postMessage({
                            type: 'PUSH_NOTIFICATION',
                            data: data
                        });
                    });
                }
                break;

            case 'achievement':
                this.emit('achievement', data);
                break;

            case 'streak_update':
                this.emit('streakUpdate', data);
                break;

            case 'system_message':
                this.emit('systemMessage', data);
                break;

            default:
                console.log('Unknown message type:', data.type);
        }
    }

    send(type, data) {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify({
                type,
                data,
                timestamp: new Date().toISOString()
            }));
        } else {
            console.error('WebSocket is not connected');
        }
    }

    on(event, handler) {
        if (!this.handlers.has(event)) {
            this.handlers.set(event, []);
        }
        this.handlers.get(event).push(handler);
    }

    off(event, handler) {
        if (this.handlers.has(event)) {
            const handlers = this.handlers.get(event);
            const index = handlers.indexOf(handler);
            if (index !== -1) {
                handlers.splice(index, 1);
            }
        }
    }

    emit(event, data) {
        if (this.handlers.has(event)) {
            this.handlers.get(event).forEach(handler => {
                try {
                    handler(data);
                } catch (error) {
                    console.error(`Error in ${event} handler:`, error);
                }
            });
        }
    }

    close() {
        if (this.socket) {
            this.socket.close();
        }
    }
}

// Create singleton instance
const notificationSocket = new NotificationWebSocket();
export default notificationSocket; 