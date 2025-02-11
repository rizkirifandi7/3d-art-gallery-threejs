import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export const loadCeilingLampModel = (scene) => {
	const loader = new GLTFLoader();

	loader.load("ovale_ceiling_lamp/scene.gltf", (gltf) => {
		const lamp = gltf.scene;

		console.log("Ceiling Lamp", gltf);

		// Position the lamp
		lamp.position.set(0, 7.5, 0);
		lamp.scale.set(1.8, 1.8, 1.8);

		lamp.traverse((child) => {
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

		// Add the lamp to the scene
		scene.add(lamp);
	});
};

