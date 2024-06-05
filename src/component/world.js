import { createCamera } from './camera';
import { createScene } from './scene';
import { createCube } from './cube';
import { createLight } from './light';
import { createRenderer } from '../system/renderer';
import { Resizer } from '../system/Resizer';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
let camera;
let renderer;
let scene;
class World {
    constructor(container) {
        scene = createScene();
        camera = createCamera();
        renderer = createRenderer();
        container.append(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        const cube = createCube();
        const light = createLight();
        scene.add(cube, light);

        camera.lookAt(cube.position);

        const resizer = new Resizer(container, camera, renderer);
    }

    render() {
        renderer.render(scene, camera);
    }
}

export { World };
