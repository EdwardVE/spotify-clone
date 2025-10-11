// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  //TODO:Hace que la renderizacion se haga en el servidor
  output: 'server',

  vite: {
    plugins: [tailwindcss()],
      server: {
      watch: {
        usePolling: true,
        interval: 100,
      },
  },
  },

  integrations: [svelte(), react()],
});