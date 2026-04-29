import React from 'react';
import ReactDOM from 'react-dom/client';
import { setupApi } from './providers/config-api.provider';
import { router } from './routes';
import { RouterProvider } from 'react-router-dom';

setupApi();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
