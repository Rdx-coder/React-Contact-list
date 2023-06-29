import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/* Enable React's StrictMode */}
    <App /> {/* Render the App component */}
  </React.StrictMode>
);
