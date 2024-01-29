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
const geometry = new BoxGeometry(100, 100, 100)
const material = new MeshBasicMaterial()
const box = new Mesh(geometry, material)
const GameObject = {

    render() {

        console.log("render")
        renderer.render(scene, camera.threeCamera);//
        scene.add(box)
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
