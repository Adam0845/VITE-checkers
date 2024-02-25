import { WebGLRenderer } from 'three';
import * as THREE from 'three';
import { Net } from "./Net.js";
export default class Renderer {
    constructor(scene, container) {

        this.scene = scene;
        this.container = container;
        this.threeRenderer = new WebGLRenderer({ antialias: true });
        this.threeRenderer.setClearColor(0xffffff);
        this.container.appendChild(this.threeRenderer.domElement);
        this.updateSize();
        this.raycaster = new THREE.Raycaster();
        this.pointer = new THREE.Vector2();
        this.event = 0;
        this.numberofclicked = 0;
        this.actualitem;
        this.lastclicked; 
       
        document.addEventListener('DOMContentLoaded', () => this.updateSize(), false);
        window.addEventListener('resize', () => this.updateSize(), false);
    }

    updateSize() {
        this.threeRenderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    render(scene, camera) {
        this.threeRenderer.render(scene, camera);
    }
}