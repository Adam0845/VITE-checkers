import { Scene } from 'three';
import * as THREE from 'three';
import Renderer from './Renderer';
import Camera from './Camera';
import Field from './Field'
import Pawn from './Pawn';
import { Game, OnlyField } from './Ico';

const container = document.getElementById('root')
const scene = new Scene()
const renderer = new Renderer(scene, container)


const pawns = [
    [0, 2, 0, 2, 0, 2, 0, 2],
    [2, 0, 2, 0, 2, 0, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
];


const backgroundColor = 0x222222;
renderer.threeRenderer.setClearColor(new THREE.Color(backgroundColor));

const axes = new THREE.AxesHelper(1000)
const directionalLight = new THREE.DirectionalLight(0xffffff, 1, 1000); 
directionalLight.position.set(0, 100, 0);
scene.add(directionalLight);

scene.add(axes)

const GameObject = {

    render(player, pawns) {

        if (player !== undefined) {
            console.log(player);
            const camera = new Camera(renderer.threeRenderer, player);
            console.log("render");
            Game.render(scene, pawns);
            renderer.render(scene, camera.threeCamera);
            requestAnimationFrame(() => GameObject.render(player, pawns));
        } 
        if (player === undefined && pawns !== undefined && pawns.length > 0) {
            console.log('to sa', pawns);
            const camera = new Camera(renderer.threeRenderer, 1); 
            OnlyField.render(scene, pawns);
            renderer.render(scene, camera.threeCamera);
            requestAnimationFrame(() => GameObject.render(player, pawns));
        }
    }
};
export { GameObject }
