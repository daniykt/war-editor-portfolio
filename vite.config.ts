import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import type { Plugin } from 'vite'
import { defineConfig } from 'vitest/config'

function preloadJersey25(): Plugin {
  const file = 'jersey-25-latin-400-normal'

  return {
    name: 'preload-jersey-25',
    transformIndexHtml(_html, ctx) {
      let href = `/node_modules/@fontsource/jersey-25/files/${file}.woff2`

      if (ctx.bundle) {
        const asset = Object.keys(ctx.bundle).find(
          (name) => name.includes(file) && name.endsWith('.woff2'),
        )
        if (!asset) throw new Error(`preload-jersey-25: ${file}.woff2 não está no bundle`)
        href = `/${asset}`
      }

      return [
        {
          tag: 'link',
          attrs: { rel: 'preload', href, as: 'font', type: 'font/woff2', crossorigin: true },
          injectTo: 'head',
        },
      ]
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), preloadJersey25()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
  },
})