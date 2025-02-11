import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export const loadMiniCeilingLampModel = (scene) => {
	const loader = new GLTFLoader();

	loader.load("mini_ceiling_lamp/scene.gltf", (gltf) => {
		const miniLamp = gltf.scene;

		console.log("Mini Ceiling miniLamp", gltf);

		// Position the miniLamp
		miniLamp.position.set(12, 8.5, 0);
		miniLamp.scale.set(0.006, 0.006, 0.006);

		// Add the miniLamp to the scene
		// scene.add(miniLamp);

		// Clone the lamp and set different positions
		const positions = [
			{ x: 10, y: 8.5, z: 0 }, // Right
			{ x: -10, y: 8.5, z: 0 }, // Left
			{ x: 0, y: 8.5, z: -10 }, // Back
			{ x: 0, y: 8.5, z: 10 }, // Front
		];

		positions.forEach((pos, index) => {
			const miniLampClone = miniLamp.clone();
			miniLampClone.position.set(pos.x, pos.y, pos.z);

			// Set rotation for left and right miniLamps
			if (index === 0) {
				// Right
				miniLampClone.rotation.set(0, 0, 0);
			} else if (index === 1) {
				// Left
				miniLampClone.rotation.set(0, Math.PI, 0);
			} else if (index === 2) {
				// Back
				miniLampClone.rotation.set(0, Math.PI / 2, 0);
			} else {
				// Front
				miniLampClone.rotation.set(0, -Math.PI / 2, 0);
			}

			scene.add(miniLampClone);
		});
	});
};
