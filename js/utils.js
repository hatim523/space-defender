
const loadImage = (imageName) => {
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

const detectCollision = (node1, node2) => {
    return haveIntersection(node1.getClientRect(), node2.getClientRect());
}

const haveIntersection = (r1, r2) => {
    return !(
        r2.x > r1.x + r1.width ||
        r2.x + r2.width < r1.x ||
        r2.y > r1.y + r1.height ||
        r2.y + r2.height < r1.y
    );
}