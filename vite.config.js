import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    host: true,
    allowedHosts: ['qoyy-backend.portalhub.top'], // or 'all' or true
    proxy: {
      '/api': 'https://qoyy-backend.portalhub.top',
    },
  },
})
