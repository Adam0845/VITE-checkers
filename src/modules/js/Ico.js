import * as THREE from 'three';
import Field from './Field';
import Pawn from './Pawn';
import blackpawn from '../gfx/blackpawn.jpg';
import whitepawn from '../gfx/whitepawn.jpg';
import blackfield from '../gfx/blackfield.jpg';
import whitefield from '../gfx/whitefield.jpg';

const textureLoader = new THREE.TextureLoader();
const whiteFieldTexture = textureLoader.load(whitefield);
const blackFieldTexture = textureLoader.load(blackfield);
const blackPawnTexture = textureLoader.load(blackpawn);
const whitePawnTexture = textureLoader.load(whitepawn);
let GameMade = false;
let fieldMade = false;
const Game = {
    render(scene, pawns) {
        if(!GameMade) {

        
        const player1 = 1;
        const player2 = 2;
        const fieldSize = 50;
        const startX = -((pawns[0].length - 1) * 0.5) * fieldSize;
        const startZ = -((pawns.length - 1) * 0.5) * fieldSize;

        for (let i = 0; i < pawns.length; i++) {
            for (let j = 0; j < pawns[i].length; j++) {
                const x = startX + j * fieldSize;
                const y = 0;
                const z = startZ + i * fieldSize;

                if ((i + j) % 2 === 0) {
                    new Field(scene, x, y, z, whiteFieldTexture);
                } else {
                    new Field(scene, x, y, z, blackFieldTexture);

                    const pawnValue = pawns[i][j];
                    if (pawnValue === 1 || pawnValue === 2) {
                        const whichplayer = (pawnValue === 1) ? player1 : player2;
                        const pawnTexture = (pawnValue === 1) ? blackPawnTexture : whitePawnTexture;
                        const whichpawn =  (pawnValue === 1) ? 'blackpawn': 'whitepawn' ;
                        console.log(whichpawn)
                        const pawnX = x;
                        const pawnZ = z;
                        const pawn = new Pawn(scene, pawnX, y, pawnZ, pawnTexture, whichplayer, whichpawn);
                        scene.add(pawn.mesh);
                    }
                }
            }
        }
    }
    GameMade = true;
}
};

const OnlyField = {
   
    render(scene, pawns) {
        if(!fieldMade)
        {
            
        
        const fieldSize = 50;
        const startX = -((pawns[0].length - 1) * 0.5) * fieldSize;
        const startZ = -((pawns.length - 1) * 0.5) * fieldSize;

        for (let i = 0; i < pawns.length; i++) {
            for (let j = 0; j < pawns[i].length; j++) {
                const x = startX + j * fieldSize;
                const y = 0;
                const z = startZ + i * fieldSize;

                if ((i + j) % 2 === 0) {
                    new Field(scene, x, y, z, whiteFieldTexture);
                } else {
                    new Field(scene, x, y, z, blackFieldTexture);
                }
            }
        }
        fieldMade = true;
        }
    }
};

export { Game, OnlyField };