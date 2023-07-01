process.on('uncaughtException', (err: unknown) => {
    // eslint-disable-next-line no-console
    console.error('There was an uncaught error', err);
    process.exit(1);
});

import { createServer } from 'http';
import { app } from './app';

const PORT = process.env.PORT || 8000;
const server = createServer(app);

server.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server listening on port ${PORT}`);
});
