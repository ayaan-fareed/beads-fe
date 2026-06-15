import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost', // Only allow localhost access, not 0.0.0.0
    port: 5173, // Fixed port
    strictPort: true, // Fail if port is occupied
    open: false // Don't auto-open browser
  },
  preview: {
    host: 'localhost',
    port: 5173,
    strictPort: true
  }
})
