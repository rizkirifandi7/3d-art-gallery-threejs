// filepath: /c:/IKI/project-learning/3D-art-gallery-threejs-master/vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
	base: "/",
	assetsInclude: ["**/*.jpg", "**/*.png", "**/*.glb", "**/*.gltf"],
	build: {
		rollupOptions: {
			input: "/main.js",
		},
	},
});
