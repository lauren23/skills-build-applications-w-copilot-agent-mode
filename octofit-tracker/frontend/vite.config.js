import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true
  }
  ,
  esbuild: {
    // Allow JSX in .js files during dependency scanning and use automatic runtime
    loader: { '.js': 'jsx' },
    jsx: 'automatic'
  }
})
