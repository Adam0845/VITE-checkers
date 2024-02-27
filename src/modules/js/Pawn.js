import * as THREE from 'three';

export default class Pawn {
    constructor(scene, x, y, z, texture, player,name) {
        this.scene = scene;

        const pawnGeometry = new THREE.CylinderGeometry(20, 20, 10, 32);

        this.material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
        
        this.mesh = new THREE.Mesh(pawnGeometry, this.material);
        this.mesh.name = name;
        this.mesh.position.set(x, y + 5, z);
    }
}
