const createGame = async () => {
    const stage = new Konva.Stage({
        container: 'konva-container',   // id of container <div>
        width: 800,
        height: 600,
    });

    // Creating layer to add on stage
    const layer = new Konva.Layer();

    // Adding layer to stage
    stage.add(layer);

    const backgroundImage = new Konva.Image({
        image: await loadImage('bg.svg'),

        width: 800,
        height: 600,
    });

    layer.add(backgroundImage);

    const konvaSpaceShipImage = new Konva.Image({
        image: await loadImage('main-jet-2.svg'),
        height: 100,
        width: 130,

        x: 10,
        y: 250,
    });

    layer.add(konvaSpaceShipImage);

    new Konva.Tween({
        node: konvaSpaceShipImage,
        x: 50,
        duration: 0.6,
        yoyo: true,
    }).play();
}

createGame();
