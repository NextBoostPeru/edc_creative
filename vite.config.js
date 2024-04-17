import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/edc-creative/', // Esta es la URL base de tu subdirectorio
  plugins: [react()],
})
