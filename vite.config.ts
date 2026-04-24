import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// Creamos el equivalente a __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@src': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/01-app'),
      '@pages': path.resolve(__dirname, './src/02-pages'),
      '@widgets': path.resolve(__dirname, './src/03-widgets'),
      '@features': path.resolve(__dirname, './src/04-features'),
      '@entities': path.resolve(__dirname, './src/05-entities'),
      '@shared': path.resolve(__dirname, './src/06-shared'),
      '@hooks-ui': path.resolve(__dirname, './src/06-shared/lib/hooks'),
      '@store-ui': path.resolve(__dirname, './src/06-shared/store-ui'),
      '@ui-base': path.resolve(__dirname, './src/06-shared/ui/base'),
      '@ui-modules': path.resolve(__dirname, './src/06-shared/ui/modules'),
      '@context': path.resolve(__dirname, './src/01-app/providers'),
      '@layouts': path.resolve(__dirname, './src/01-app/layouts'),
      '@config': path.resolve(__dirname, './src/06-shared/config'),
      '@api': path.resolve(__dirname, './src/06-shared/api'),
      '@assets': path.resolve(__dirname, './src/06-shared/assets'),
      '@routes': path.resolve(__dirname, './src/01-app/routes'),
    },
  },
});
