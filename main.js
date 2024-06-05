import './style.css';
import { World } from './src/component/world';
const container = document.getElementById('scene-container');
const world = new World(container);
function tick() {
    world.render();

    requestAnimationFrame(tick);
}

tick();
