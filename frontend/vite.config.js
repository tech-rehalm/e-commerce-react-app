import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://e-commerce-react-app-sepia.vercel.app/",
      "/uploads/": "https://e-commerce-react-app-sepia.vercel.app/",
    }
  }
})
