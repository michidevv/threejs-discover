import { DodecahedronGeometry, MathUtils, Mesh, MeshStandardMaterial } from 'three';

export function createShape() {
    const geometry = new DodecahedronGeometry(2, 0);
    const material = new MeshStandardMaterial({ color: 'purple' });
    const mesh = new Mesh(geometry, material);

    mesh.rotation.set(-0.5, -0.1, 0.8);

    const radPerSec = MathUtils.degToRad(30);
    mesh.tick = (delta) => {
        mesh.rotation.z += radPerSec * delta;
        mesh.rotation.x += radPerSec * delta;
        mesh.rotation.y += radPerSec * delta;
    }

    return mesh;
}