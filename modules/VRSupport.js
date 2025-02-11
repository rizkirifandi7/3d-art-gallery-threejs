import { VRButton } from "three/examples/jsm/webxr/VRButton.js";

export const setupVR = (renderer) => {
	if (navigator.xr) {
		navigator.xr
			.isSessionSupported("immersive-vr")
			.then((supported) => {
				if (supported) {
					renderer.xr.enabled = true;

					renderer.xr.addEventListener("sessionstart", () => {
						console.log("WebXR session started");
					});

					renderer.xr.addEventListener("sessionend", () => {
						console.log("WebXR session ended");
					});

					document.body.appendChild(VRButton.createButton(renderer));
				} else {
					console.warn("WebXR immersive-vr session not supported");
				}
			})
			.catch((error) => {
				console.error("Error checking WebXR support:", error);
			});
	} else {
		console.warn("WebXR not supported by this browser");
	}
};
