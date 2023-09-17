import { Clock } from "three";

export class Loop {
    constructor(camera, scene, renderer) {
        this._camera = camera;
        this._scene = scene;
        this._renderer = renderer;
        this._clock = new Clock();
        this.updatables = [];
    }

    start = () => {
        this._renderer.setAnimationLoop(() => {
            this._tick();

            this._renderer.render(this._scene, this._camera);
        });
    }

    stop = () => {
        this._renderer.setAnimationLoop(null);
    }

    _tick = () => {
        const delta = this._clock.getDelta();
        for (let i = 0; i < this.updatables.length; i++) {
            this.updatables[i].tick(delta);
        }
    }
}