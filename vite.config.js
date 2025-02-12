import { defineConfig } from "vite";

export default defineConfig({
	base: "/3D-art-gallery-threejs",
	build: {
		rollupOptions: {
			input: "/main.js",
		},
	},
});
