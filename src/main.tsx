import { createRoot } from 'react-dom/client'
import './index.css'

// NUCLEAR DIAGNOSTIC: This bypasses all CSS/React.
document.write('<div style="background:red; color:white; padding:50px; position:fixed; inset:0; z-index:99999; font-size:30px;">JS EXECUTING: ' + new Date().toLocaleTimeString() + '</div>');

console.log('MAIN.TSX LOADING...');
const diag = document.getElementById('diag-status');
if (diag) diag.innerText = 'Status: main.tsx executing...';

// Diagnostic: show dark bg immediately so user knows CSS loaded
document.body.style.background = '#0B0F1A';

import App from './App.tsx'
import ErrorBoundary from './components/ui/ErrorBoundary'

try {
    createRoot(document.getElementById('root')!).render(
        <ErrorBoundary fallback={<div style={{ color: 'white', textAlign: 'center', paddingTop: '100px', fontFamily: 'monospace' }}>Something went wrong. Check console (F12).</div>}>
            <App />
        </ErrorBoundary>,
    )
} catch (err) {
    console.error('MOUNT ERROR:', err);
    document.getElementById('root')!.innerHTML = `<pre style="color:red;padding:40px;font-family:monospace">${err}</pre>`;
}
