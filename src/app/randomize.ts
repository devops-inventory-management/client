type Image = {
	image: string;
};

function randomize(): Image {
	const images = require("./images.json");
	const randomImage =
		images[Math.floor(Math.random() * Object.keys(images).length)];
	return { image: randomImage };
}

export default randomize;
