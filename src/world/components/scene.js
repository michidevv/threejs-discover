import { Color, Scene } from 'three';

export function createScene() {
    const scene = new Scene();

    scene.background = new Color('#005f8c');

    return scene;
}
