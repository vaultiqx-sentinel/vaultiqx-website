// index.js
// VaultiqX — Sovereign Cockpit Entry Point
// Tribute caption: "VaultiqX Breathes In Humanity"

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Mount React app to #root container in public/index.html
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Target container #root not found in index.html");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);