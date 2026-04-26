import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { setupApi } from './providers/config-api.provider';

setupApi();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
