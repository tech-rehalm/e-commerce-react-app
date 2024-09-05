import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
<<<<<<< HEAD
      "/api/": "http://localhost:5000",
      "/uploads/": "http://localhost:5000",
=======
      "/api/": "https://e-commerce-backend-tawny.vercel.app/",
      "/uploads/": "https://e-commerce-backend-tawny.vercel.app/",
>>>>>>> 52685171323f0d4f005d122e386f5daa726b79a3
    }
  }
})
