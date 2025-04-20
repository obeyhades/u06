import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        editprofile: resolve(__dirname, 'editProfile.html'),
        login: resolve(__dirname, 'login.html'),
        mainpage: resolve(__dirname, 'mainPage.html'),
        register: resolve(__dirname, 'register.html'),
      },
    },
  },
});
