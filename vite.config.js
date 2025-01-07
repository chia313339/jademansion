import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/', // 設置為絕對路徑
  server: {
    host: '0.0.0.0',
  },
  optimizeDeps: {
    include: ['bootstrap']
  }
})
