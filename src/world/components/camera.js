import { PerspectiveCamera } from "three";

export function createCamera() {
    const camera = new PerspectiveCamera(
        35, // fov
        1, // aspect ratio
        0.1, // near clipping plane
        100, // far clipping plane
    );

    camera.position.set(0, 0, 10);

    let dir = 1;
    camera.tick = (delta) => {
        if (camera.position.z < 10 && dir < 0) {
            dir = 1;
        } else if (camera.position.z > 20 && dir > 0) {
            dir = -1;
        }

        camera.position.z += dir * delta;
    }

    return camera;
}
