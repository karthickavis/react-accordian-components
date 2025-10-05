import type { UserConfig as VitestConfig } from 'vitest';
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss(),],
  test: {                   // ✅ Works now
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  } as VitestConfig,
});


