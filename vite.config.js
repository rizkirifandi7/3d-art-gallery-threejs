import { defineConfig } from 'vite';

export default defineConfig({
  base: '/3D-art-gallery',
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.glb', '**/*.gltf'],
  build: {
    rollupOptions: {
      input: '/main.js',
    },
  },
});
