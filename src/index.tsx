import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {Login} from './components';

const root = createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <StrictMode>
        <Login/>
    </StrictMode>
);
