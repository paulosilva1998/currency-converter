import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; // Importando o plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Usando o plugin no array de plugins
});