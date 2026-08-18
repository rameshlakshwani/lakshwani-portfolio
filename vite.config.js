import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/lakshwani-portfolio/',
  build: {
    chunkSizeWarningLimit: 1600,
  }
})
