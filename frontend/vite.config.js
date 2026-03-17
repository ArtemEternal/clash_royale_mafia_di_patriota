import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from "path";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./frontend"),
    }
  },
  assetsInclude: ['**/*.mp4'], // Добавляем поддержку mp4 файлов
  build: {
    rollupOptions: {
      external: [] // Убедись, что тут пусто
    }
  }
})
