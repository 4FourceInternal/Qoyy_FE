import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    host: '0.0.0.0', // allow connections from outside
    port: 5173,      // your local dev/serve port
    allowedHosts: ['qoyyglobal.com', 'www.qoyyglobal.com'], // ✅ add this
  },
})
