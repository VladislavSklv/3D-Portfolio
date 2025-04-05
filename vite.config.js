import { defineConfig } from 'vite'

export default defineConfig({
  base: '/3D-Portfolio/', // Must match your repo name
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // Ensures assets go to /assets
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash].[ext]',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  }
})