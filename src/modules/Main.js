const szachownica = [

    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 0, 1, 0],
    [0, 1, 0, 1],

];
import { BoxGeometry, Mesh, MeshBasicMaterial, Scene } from 'three';
import Renderer from './Renderer';
import Camera from './Camera';

const container = document.getElementById('root')
const scene = new Scene()
const renderer = new Renderer(scene, container)
const camera = new Camera(renderer.threeRenderer)
const geometry = new BoxGeometry(1, 1, 1)
const material = new MeshBasicMaterial()
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        const box = new Mesh(geometry, material)
        scene.add(box)
    }
}
const GameObject = {

    render() {

        console.log("render")
        renderer.render(scene, camera.threeCamera);//

        requestAnimationFrame(GameObject.render);

    }


}

const pionki = [

    [0, 2, 0, 2],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 0, 1, 0],

];
export { GameObject }
