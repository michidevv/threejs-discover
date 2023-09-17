import { createCamera } from "./components/camera";
// import { createCube } from "./components/cube";
import { createShape } from "./components/shape";
import { createLights } from "./components/lights";
import { createScene } from "./components/scene";
import { Loop } from './systems/Loop';
import { Resizer } from "./systems/Resizer";
import { createRenderer } from "./systems/renderer";

export class World {
    constructor(container) {
        this._camera = createCamera();
        this._scene = createScene();
        this._renderer = createRenderer();
        this._loop = new Loop(this._camera, this._scene, this._renderer);
        container.append(this._renderer.domElement);

        // const cube = createCube();
        const shape = createShape();
        const light = createLights();
        this._scene.add(shape, light);

        this._loop.updatables.push(shape);

        new Resizer(container, this._camera, this._renderer);
    }

    start = () => {
        this._loop.start();
    }

    stop = () => {
        this._loop.stop();
    }
}
