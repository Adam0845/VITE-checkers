import * as THREE from 'three';
import Field from './Field';
import Pawn from './Pawn';
import blackpawn from '../gfx/blackpawn.jpg';
import whitepawn from '../gfx/whitefield.jpg';
import blackfield from '../gfx/blackfield.jpg';
import whitefield from '../gfx/whitefield.jpg';
const Game = {
    render(scene, pawns) {
        const fieldSize = 50;
        const startX = -((pawns[0].length - 1) * 0.5) * fieldSize;
        const startZ = -((pawns.length - 1) * 0.5) * fieldSize;

        const textureLoader = new THREE.TextureLoader();

        for (let i = 0; i < pawns.length; i++) {
            for (let j = 0; j < pawns[i].length; j++) {
                const x = startX + j * fieldSize;
                const y = 0;
                const z = startZ + i * fieldSize;

                if ((i + j) % 2 === 0) {
                    textureLoader.load(whitefield, (texture) => {
                        texture.encoding = THREE.sRGBEncoding;
                        new Field(scene, x, y, z, texture);
                    });
                } else {
                    textureLoader.load(blackfield, (texture) => {
                        texture.encoding = THREE.sRGBEncoding;
                        new Field(scene, x, y, z, texture);
                    });

                    const pawnValue = pawns[i][j];
                    if (pawnValue === 1 || pawnValue === 2) {
                        const pawnX = x;
                        const pawnZ = z;
                        const pawnTexture = (pawnValue === 1) ? blackpawn : whitepawn;
                        textureLoader.load(pawnTexture, (texture) => {
                            texture.encoding = THREE.sRGBEncoding;
                            const pawn = new Pawn(scene, pawnX, y, pawnZ, texture);
                            scene.add(pawn.mesh);
                        });
                    }
                }
            }
        }
    }
};

export default Game;

const OnlyField = {
    render(scene, pionki) {
        const fieldSize = 50;
        const startX = -((pionki[0].length - 1) * 0.5) * fieldSize;
        const startZ = -((pionki.length - 1) * 0.5) * fieldSize;

        for (let i = 0; i < pionki.length; i++) {
            for (let j = 0; j < pionki[i].length; j++) {
                const x = startX + j * fieldSize;
                const y = 0;
                const z = startZ + i * fieldSize;

                if ((i + j) % 2 === 0) {
                    new Field(scene, x, y, z, 0xfffff6);
                } else {
                    new Field(scene, x, y, z, 0x000000);


                }
            }
        }
    }
}
export { Game, OnlyField }