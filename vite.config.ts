import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'vite-plugin-laravel';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [vue(), laravel(), eslintPlugin()],
  server: {
    host: '0.0.0.0'
  }
});
