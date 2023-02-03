import { defineConfig } from 'vite'
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { ssr } from 'vite-plugin-ssr/plugin'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        app: 'index.html',
        ssr: 'ssr.ts',
      }
    }
  },
  plugins: [svelte({
    preprocess: vitePreprocess(),
  })],
  publicDir: "public",
})
