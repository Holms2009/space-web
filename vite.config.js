import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: 'http://localhost:3000'
  },
  css: {
    modules: {
      generateScopedName: '[folder]__[local]_[hash:base64:5]',
    }
  },
})