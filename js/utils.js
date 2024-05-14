
const loadImageHelper = (imageName) => {
    return new Promise((resolve, reject) => {
        const image =  new Image();

        image.onload = () => {
            resolve(image);
        }

        image.onerror = () => {
            console.error("Image failed to load", imageName);
            reject("Image failed to load");
        }

        image.src = `../pix/${imageName}`;
    });
}

const loadImage = async (imageName) => {
    return await loadImageHelper(imageName);
}