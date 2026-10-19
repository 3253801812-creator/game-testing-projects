import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const oracleHost = document.getElementById('root');
if (!oracleHost) throw new Error('深渊声呐神谕无法定位界面容器');
createRoot(oracleHost).render(<App />);
