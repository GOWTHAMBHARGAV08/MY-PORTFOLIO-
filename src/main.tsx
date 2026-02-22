import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Diagnostic: show dark bg immediately so user knows CSS loaded
document.body.style.background = '#0B0F1A';

import App from './App.tsx'
import ErrorBoundary from './components/ui/ErrorBoundary'

try {
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <ErrorBoundary fallback={<div style={{ color: 'white', textAlign: 'center', paddingTop: '100px', fontFamily: 'monospace' }}>Something went wrong. Check console (F12).</div>}>
                <App />
            </ErrorBoundary>
        </StrictMode>,
    )
} catch (err) {
    console.error('MOUNT ERROR:', err);
    document.getElementById('root')!.innerHTML = `<pre style="color:red;padding:40px;font-family:monospace">${err}</pre>`;
}
