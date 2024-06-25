import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',  // Asegura que las rutas sean relativas
  build: {
    outDir: 'dist',  // Asegura que la salida esté en la carpeta dist
  }
});
