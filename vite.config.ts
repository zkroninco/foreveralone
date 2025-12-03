import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {

          // Separate React vendor code
          'react-vendor': ['react', 'react-dom'],
          // Separate icon libraries
          'icons': ['react-icons']
        }
      }
    },
    chunkSizeWarningLimit: 500
  }
})
