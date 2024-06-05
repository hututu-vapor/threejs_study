import { CapsuleGeometry, Mesh, MeshStandardMaterial } from 'three';
function createCube() {
    const geomery = new CapsuleGeometry(1, 1, 4, 8);
    const material = new MeshStandardMaterial({
        color: '#8295BA',
        wireframe: false
    });

    const cube = new Mesh(geomery, material);
    cube.rotation.set(-0.5, -0.1, 0.8);
    return cube;
}

export { createCube };
