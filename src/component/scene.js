import { Scene, Color } from 'three';

function createScene() {
    const scene = new Scene();
    scene.background = new Color('lightBlue');
    return scene;
}

export { createScene };
