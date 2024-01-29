import { allEvents } from "./src/modules/Ui.js"
import { GameObject } from "./src/modules/Main.js"
import './src/css/style.css';
GameObject.render()
allEvents.init()
const client = io()
window.onload = function () {

    client.on("onconnect", (data) => {
        console.log(data.clientId)
    })

}
document.addEventListener("mousemove", (e) => {
    client.emit("mouseposition", {
        posX: e.clientX,
        posY: e.clientY
    })
});