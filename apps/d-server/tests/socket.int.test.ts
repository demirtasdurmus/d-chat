import { createServer, Server as HttpServer } from 'http';
import { Server as SocketServer, Socket as ServerSocket } from 'socket.io';
import { io as Client, Socket as ClientSocket } from 'socket.io-client';

describe('Socket', () => {
    let io: SocketServer;
    let httpServer: HttpServer;
    let clientSocket: ClientSocket;
    let serverSocket: ServerSocket;

    // eslint-disable-next-line jest/no-done-callback
    beforeAll((done) => {
        httpServer = createServer();
        io = new SocketServer(httpServer);

        httpServer.listen(() => {
            interface AddressInfo {
                address: string;
                family: string;
                port: number;
            }
            const { port } = httpServer.address() as AddressInfo;

            clientSocket = Client(`http://localhost:${port}`);

            io.on('connection', (socket: ServerSocket) => {
                serverSocket = socket;
            });

            clientSocket.on('connect', done);
        });
    });

    afterAll(() => {
        io.close();
        clientSocket.close();
    });

    it('should receive a message', () => {
        clientSocket.on('message', (data) => {
            expect(data).toBe('Message received: Hello World!');
        });
        serverSocket.emit('message', 'Hello World!');
    });
});
