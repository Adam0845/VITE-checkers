import { WebGLRenderer } from 'three';
import * as THREE from 'three';
import { Net } from "./Net.js";
import { allEvents } from './Ui.js'
                
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
        this.e = 0;
        this.numberofclicked = 0;
        this.actualitem;
       
        document.addEventListener('DOMContentLoaded', () => this.updateSize(), false);
        window.addEventListener('resize', () => this.updateSize(), false);
        
    }
    onMouseDown(scene, camera, player) {
        let lastclicked;
        window.addEventListener('mousedown', (event) => {
            this.e++;
            //console.log(player)
            this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
            this.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
            this.raycaster.setFromCamera(this.pointer, camera);
            const intersects = this.raycaster.intersectObjects(this.scene.children, true);
            //this.render(scene, camera)
            // console.log(intersects);
            // console.log(this.pointer);
            if(intersects.length > 0)
            {
               const object = intersects[0].object;
               if (object.geometry instanceof THREE.CylinderGeometry) {
                if(player===2)
                {
                    if(object.name==='whitepawn')
                    {
                        object.material = new THREE.MeshBasicMaterial({
                            color: 0xffff00,
                            map: object.material.map 
                        });
                        if(lastclicked)
                        {
                            lastclicked.material = new THREE.MeshBasicMaterial({
                                color: 0xffffff,
                                map: lastclicked.material.map 
                            });
                        }
                        
                    }
                }
                if(player===1)
                {
                    if(object.name==='blackpawn')
                    {
                        object.material = new THREE.MeshBasicMaterial({
                            color: 0xffff00,
                            map: object.material.map 
                        });
                        if(lastclicked)
                        {
                            lastclicked.material = new THREE.MeshBasicMaterial({
                                color: 0xffffff,
                                map: lastclicked.material.map 
                            });
                        }
                    }

                }
                lastclicked = object;
                //console.log(object.material)
                }
            //    console.log(intersects[0].object);
            //    console.log(this.scene.children[1])
            }
        })
        
    }
   

    updateSize() {
        this.threeRenderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    render(scene, camera, player) {
            if(allEvents.users === 2)
            {
                this.onMouseDown(scene, camera, player);
                this.threeRenderer.render(scene, camera);
            }
            else
            {
                this.threeRenderer.render(scene, camera);
            }
        
    }
}
