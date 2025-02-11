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
