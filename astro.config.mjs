// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import Icons from 'unplugin-icons/vite'
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
  output: 'static',
  site: 'https://npandiscio.github.io',
  base: '/db',
  vite: {
    plugins: [
      basicSsl(),
      tailwindcss(),
    Icons({
        compiler: 'astro',
      }),
    ],
  },
});
