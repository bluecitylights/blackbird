/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/groove',

  server: {
    port: 4200,
    host: '0.0.0.0',
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..'],
    },
  },

  preview: {
    port: 4300,
    host: '0.0.0.0',
  },

  plugins: [
    svelte(),
    viteTsConfigPaths({
      loose: true,
      root: '../../',
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../',
  //    }),
  //  ],
  // },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
