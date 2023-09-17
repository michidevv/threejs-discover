export class Resizer {
    constructor(container, camera, renderer) {
        this._setSize(container, camera, renderer);

        window.addEventListener('resize', () => {
            this._setSize(container, camera, renderer);
        })
    }

    _setSize = (container, camera, renderer) => {
        camera.aspect = container.clientWidth / container.clientHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(container.clientWidth, container.clientHeight);

        renderer.setPixelRatio(window.devicePixelRatio);
    }
}