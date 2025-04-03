import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,
    // 或者特定定义某些变量
    'process.env.REACT_APP_REMOTE_SERVER': JSON.stringify('http://localhost:4000')
  }
})
