export const paintingData = [
	// Front Wall
	...Array.from({ length: 4 }, (_, i) => {
		const students = [
			"Asri Rizka A",
			"Rizki Rifani",
			"Aditya Suryana",
			"Fujianti Azizah",
		];

		const nims = ["10121299", "10121284", "10121297", "10121292"];

		return {
			imgSrc: `artworks/${i + 1}.jpeg`,
			width: 5,
			height: 3,
			position: { x: -15 + 10 * i, y: 2, z: -19.5 },
			rotationY: 0,
			info: {
				title: students[i],
        nama: students[i],
				kelas: "IF8",
				nim: nims[i],
				description: `${students[i]} adalah mahasiswa kelas IF8 dengan NIM ${nims[i]}.`,
				year: "2021",
			},
		};
	}),
	// Back Wall
	...Array.from({ length: 4 }, (_, i) => ({
		imgSrc: `artworks/${i + 5}.jpg`,
		width: 5,
		height: 3,
		position: { x: -15 + 10 * i, y: 2, z: 19.5 },
		rotationY: Math.PI,
		info: {
			title: `Van Gogh ${i + 5}`,
			nama: "Vincent van Gogh",
			description: `Artwork ${
				i + 5
			} by Vincent van Gogh is an exceptional piece showcasing his remarkable ability to capture emotion and atmosphere.`,
			year: `Year ${i + 5}`,
		},
	})),
	// Left Wall
	...Array.from({ length: 4 }, (_, i) => ({
		imgSrc: `artworks/${i + 9}.jpg`,
		width: 5,
		height: 3,
		position: { x: -19.5, y: 2, z: -15 + 10 * i },
		rotationY: Math.PI / 2,
		info: {
			title: `Van Gogh ${i + 9}`,
			nama: "Vincent van Gogh",
			description: `With its striking use of color and brushwork, Artwork ${
				i + 9
			} is a testament to Van Gogh's artistic genius.`,
			year: `Year ${i + 9}`,
		},
	})),
	// Right Wall
	...Array.from({ length: 4 }, (_, i) => ({
		imgSrc: `artworks/${i + 13}.jpg`,
		width: 5,
		height: 3,
		position: { x: 19.5, y: 2, z: -15 + 10 * i },
		rotationY: -Math.PI / 2,
		info: {
			title: `Van Gogh ${i + 13}`,
			artist: "Vincent van Gogh",
			description: `Artwork ${
				i + 13
			} is a captivating piece by Vincent van Gogh, reflecting his distinctive style and deep passion for art.`,
			year: `Year ${i + 13}`,
		},
	})),
];

