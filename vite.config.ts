import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'

/**
 * https://vite.dev/config/
 */
export default defineConfig({
  server: {
    open: true,
    port: 3000,
  },
  plugins: [react(), svgr()],
})
