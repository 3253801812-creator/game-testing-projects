import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const cicMount = document.getElementById('root');
if (!(cicMount instanceof HTMLElement)) throw new Error('黑潮 CIC 启动容器不可用');
const cicRoot = createRoot(cicMount);
cicRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
