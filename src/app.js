import { World } from './world/World';

function main() {
    const container = document.querySelector('.container');
    const world = new World(container);
    world.render();
}

main();
