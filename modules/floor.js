import * as THREE from "three";

export const setupFloor = (scene) => {
	const textureLoader = new THREE.TextureLoader();

	// Load the textures
	const colorTexture = textureLoader.load(
		"Floor051/WoodFloor051_1K-JPG_Color.jpg"
	);
	const displacementTexture = textureLoader.load(
		"Floor051/WoodFloor051_1K-JPG_Displacement.jpg"
	);
	const normalTexture = textureLoader.load(
		"Floor051/WoodFloor051_1K-JPG_NormalGL.jpg"
	);
	const roughnessTexture = textureLoader.load(
		"Floor051/WoodFloor051_1K-JPG_Roughness.jpg"
	);
	const aoTexture = textureLoader.load(
		"Floor051/WoodFloor051_1K-JPG_AmbientOcclusion.jpg"
	);

	// Set texture parameters
	colorTexture.wrapS = colorTexture.wrapT = THREE.RepeatWrapping;
	displacementTexture.wrapS = displacementTexture.wrapT = THREE.RepeatWrapping;
	normalTexture.wrapS = normalTexture.wrapT = THREE.RepeatWrapping;
	roughnessTexture.wrapS = roughnessTexture.wrapT = THREE.RepeatWrapping;
	aoTexture.wrapS = aoTexture.wrapT = THREE.RepeatWrapping;

	const planeGeometry = new THREE.PlaneGeometry(45, 45);
	const planeMaterial = new THREE.MeshStandardMaterial({
		map: colorTexture,
		displacementMap: displacementTexture,
		normalMap: normalTexture,
		roughnessMap: roughnessTexture,
		aoMap: aoTexture,
		displacementScale: 0.1,
		side: THREE.DoubleSide,
	});

	const floorPlane = new THREE.Mesh(planeGeometry, planeMaterial);

	floorPlane.rotation.x = Math.PI / 2;
	floorPlane.position.y = -Math.PI;

	scene.add(floorPlane);
};

