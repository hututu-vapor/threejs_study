import { WebGLRenderer } from 'three';

function createRenderer() {
    const renderer = new WebGLRenderer();
    // 开启灯光

    return renderer;
}

export { createRenderer };
