import { createRoot } from 'react-dom/client';
import EmeraldRoomApp from './EmeraldRoomApp';
import './index.css';

const host=document.getElementById('root');
if (!host) throw new Error('React mount node #root is missing');
createRoot(host).render(<EmeraldRoomApp />);
