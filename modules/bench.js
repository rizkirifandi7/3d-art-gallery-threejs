import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

export const loadBenchModel = (scene) => {
	const loader = new GLTFLoader();

	loader.load("modern_bench_1/scene.gltf", (gltf) => {
		const bench = gltf.scene;
		console.log("BENCH", gltf);

		// Iterate through all the meshes in the bench and update their materials
		bench.traverse((child) => {
			if (child.isMesh) {
				// Ensure material uses correct lighting
				child.material.needsUpdate = true;

				// If using standard material
				if (child.material.type === "MeshStandardMaterial") {
					child.material.metalness = 0.5;
					child.material.roughness = 0.5;
				}

				// Ensure texture is loaded correctly
				if (child.material.map) {
					child.material.map.encoding = THREE.sRGBEncoding;
					child.material.map.needsUpdate = true;
				}
			}
		});

		// Default Position and Scale
		bench.position.set(0, -3.12, 0);
		bench.rotation.set(0, 0, 0);
		bench.scale.set(4.5, 4.5, 4.5);

		// Add the original bench to the scene
		// scene.add(bench);

		// Clone the bench and set different positions
		const positions = [
			{ x: 10, y: -3.12, z: 0 }, // Right
			{ x: -10, y: -3.12, z: 0 }, // Left
			{ x: 0, y: -3.12, z: -10 }, // Back
			{ x: 0, y: -3.12, z: 10 }, // Front
		];

		positions.forEach((pos, index) => {
			const benchClone = bench.clone();
			benchClone.position.set(pos.x, pos.y, pos.z);

			// Set rotation for left and right benches
			if (index === 0) {
				// Right
				benchClone.rotation.set(0, -Math.PI / 2, 0);
			} else if (index === 1) {
				// Left
				benchClone.rotation.set(0, Math.PI / 2, 0);
			} else {
				benchClone.rotation.set(0, 0, 0);
			}

			scene.add(benchClone);
		});
	});
};
