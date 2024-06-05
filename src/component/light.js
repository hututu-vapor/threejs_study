import { DirectionalLight, RectAreaLight } from 'three';

function createLight() {
    const width = 10;
    const height = 10;
    const intensity = 1;
    const rectLight = new RectAreaLight(0xffffff, intensity, width, height);
    rectLight.position.set(5, 5, 0);
    rectLight.lookAt(0, 0, 0);
    return rectLight;
}

export { createLight };
