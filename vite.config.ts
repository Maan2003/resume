import { defineConfig } from 'vite'
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        app: 'index.html',
      }
    }
  },
  plugins: [svelte({
    preprocess: vitePreprocess(),
  })],
  publicDir: "public",
})
