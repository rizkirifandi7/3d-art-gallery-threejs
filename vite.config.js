import { defineConfig } from "vite";

export default defineConfig({
	base: "/3d-art-gallery-threejs",
	build: {
		rollupOptions: {
			input: "/main.js",
		},
	},
});
