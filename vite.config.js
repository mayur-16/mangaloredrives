// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '::',        // allows access from network (same as --host ::)
    port: 3000,        // matches your package.json script
  },
  resolve: {
    alias: {
      // Optional: nice shortcuts (common with shadcn/ui)
      '@': '/src',
    },
  },
})