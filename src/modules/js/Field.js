import * as THREE from 'three';
export default class Field {
    constructor(scene, x, y, z, texture) {
        //console.log("field")
        //console.log(texture)
        this.scene = scene;
        this.geometry = new THREE.PlaneGeometry(50, 50);
        // this.material = new THREE.TextureLoader().load('/gfx/wood.png')
        this.material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(x, y, z);
        this.scene.add(this.mesh)

        this.mesh.rotation.x = Math.PI / 2
    }
}