import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import io from 'socket.io-client';

const socket = io('http://localhost:8000');

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        socket.on('connect', () => {
            // eslint-disable-next-line no-console
            console.log('connected');
        });

        socket.on('message', (data) => {
            // eslint-disable-next-line no-console
            console.log(data);
        });

        socket.emit('message', 'Hello from client');

        socket.on('disconnect', () => {
            // eslint-disable-next-line no-console
            console.log('disconnected');
        });
    }, []);

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React!</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
            <Accordion title="test">
                <p>test</p>
            </Accordion>
        </>
    );
}

export default App;
