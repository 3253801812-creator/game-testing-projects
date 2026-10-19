import { createRoot } from 'react-dom/client';
import PrivateTableApp from './PrivateTableApp';
import './index.css';

const host=document.getElementById('root');
if (!host) throw new Error('React mount node #root is missing');
createRoot(host).render(<PrivateTableApp />);
