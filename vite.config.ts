import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false
        }
      }
    }),
    laravel(['resources/ts/app.ts']),
    eslint(),
    {
      name: 'blade',
      handleHotUpdate({ file, server }) {
        if (file.endsWith('.blade.php')) {
          server.ws.send({
            type: 'full-reload',
            path: '*'
          });
        }
      }
    }
  ],
  resolve: {
    alias: {
      '@': '/resources/ts',
      '~': '/resources'
    }
  },
  server: {
    hmr: {
      host: 'localhost'
    },
    watch: {
      usePolling: true
    }
  }
});
