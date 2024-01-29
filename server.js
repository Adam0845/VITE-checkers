const express = require("express")
const app = express()
const PORT = 3000;
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const socketio = new Server(server);
app.use(express.static("dist"));
let users = [];
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
});
// app.listen(PORT, function () {
//     console.log("start serwera na porcie " + PORT)
// })
server.listen(3000, () => {
    console.log('start na porcie 3000');
});
socketio.on('connection', (client) => {
    console.log("klient się podłączył z id = ", client.id)
    client.emit("onconnect", {
        clientId: client.id
    })
    client.on("disconnect", (reason) => {
        console.log("klient się rozłącza", reason)
    })
    // client.id - unikalna nazwa klienta generowana przez socket.io
});
//install vite and express and three js