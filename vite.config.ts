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
          // Separate wallet adapter libraries into their own chunk
          'wallet-adapter': [
            '@solana/wallet-adapter-base',
            '@solana/wallet-adapter-react',
            '@solana/wallet-adapter-react-ui',
            '@solana/wallet-adapter-wallets',
            '@solana/web3.js'
          ],
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
