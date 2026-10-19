import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const chartroomMount = document.querySelector<HTMLDivElement>('#root');
if (!chartroomMount) throw new Error('皇家海图室缺少 #root 挂载点');
createRoot(chartroomMount).render(<App />);
