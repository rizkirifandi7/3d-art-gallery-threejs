import * as THREE from "three";

const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();

function clickHandling(renderer, camera, paintings) {
	renderer.domElement.addEventListener(
		"click",
		(event) => {
			mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
			mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
			onClick(camera, paintings);
		},
		false
	);
}

function onClick(camera, paintings) {
	raycaster.setFromCamera(mouse, camera);

	const intersects = raycaster.intersectObjects(paintings);

	if (intersects.length > 0) {
		const painting = intersects[0].object;

		// Perform the desired action, e.g., open a modal or redirect to another page
		console.log("Clicked painting:", painting.userData.info.title);

		// Get the modal elements
		const modal = document.getElementById("paintingModal");
		const modalTitle = document.getElementById("modalTitle");
		const modalImage = document.getElementById("modalImage");
		const modalDescription = document.getElementById("modalDescription");
		const span = document.getElementsByClassName("close")[0];

		// Set the modal content
		modalTitle.textContent = painting.userData.info.title;
		modalImage.src = painting.userData.img;
		modalDescription.textContent = painting.userData.info.description;

		// Display the modal
		modal.style.display = "block";

		// Close the modal when the user clicks on <span> (x)
		span.onclick = function () {
			modal.style.display = "none";
		};

		// Close the modal when the user clicks anywhere outside of the modal
		window.onclick = function (event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		};
	}
}

export { clickHandling };

