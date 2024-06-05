class Resizer {
    constructor(container, camera, renderer) {
        camera.aspect = container.clientWidth / container.clientHeight;
        // 更新相机的投影矩阵
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        // 设置设备比
        renderer.setPixelRatio(window.devicePixelRatio);
    }
}

export { Resizer };
