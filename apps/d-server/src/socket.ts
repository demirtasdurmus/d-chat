import { Server as HttpServer } from 'http';
import { Server, Socket } from 'socket.io';

export function startSocket(httpServer: HttpServer) {
    // Create Socket.io server
    const io = new Server(httpServer, {
        cors: {
            origin: '*',
        },
    });

    // Listen for new connections
    io.on('connection', (socket: Socket) => {
        // eslint-disable-next-line no-console
        console.log(`Socket connected: ${socket.id}`);

        // Listen for new messages
        socket.on('message', (data) => {
            // eslint-disable-next-line no-console
            console.log(`Message received: ${data}`);
            socket.emit('message', `Message received: ${data}`);
        });

        // Listen for disconnects
        socket.on('disconnect', () => {
            // eslint-disable-next-line no-console
            console.log(`Socket disconnected: ${socket.id}`);
        });
    });
}
