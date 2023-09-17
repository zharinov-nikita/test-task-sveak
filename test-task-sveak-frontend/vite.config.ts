/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  server: {
    host: true,
    port: 9000,
  },
  preview: {
    port: 9000,
  },
  resolve: {
    alias: {
      '@components': '/src/components',
      '@constants': '/src/constants',
      '@pages': '/src/pages',
      '@store': '/src/store',
      '@utils': '/src/utils',
    },
  },
});
