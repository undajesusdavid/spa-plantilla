import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@src': path.resolve(__dirname, './src'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@hooks-ui': path.resolve(__dirname, './src/shared/hooks-ui'),
      '@store-ui': path.resolve(__dirname, './src/shared/store-ui'),
      '@ui-base': path.resolve(__dirname, './src/shared/ui/base'),
      '@ui-modules': path.resolve(__dirname, './src/shared/ui/modules'),
      '@context': path.resolve(__dirname, './src/shared/context'),
      '@layouts': path.resolve(__dirname, './src/shared/layouts'),
      '@constants': path.resolve(__dirname, './src/shared/constants'),
      '@api': path.resolve(__dirname, './src/api'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@routes': path.resolve(__dirname, './src/routes'),
    },
  },
});
