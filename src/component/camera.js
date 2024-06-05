import { PerspectiveCamera } from 'three';
const fov = 35; // AKA Field of View
const aspect = 1;
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane
function createCamera() {
    const camera = new PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 0, 10);
    return camera;
}

export { createCamera };
