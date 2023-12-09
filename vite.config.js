import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import forms from '@tailwindcss/forms';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), forms()],
});
