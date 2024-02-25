const express = require('express');
const app = express();
const http = require('http');
const PORT = 3000

const server = http.createServer(app);

const { Server } = require("socket.io");
const socketio = new Server(server);

socketio.on('connection', (client) => {
    console.log("klient się podłączył z id =", client.id);

    client.on("userLogin", (data) => {
        console.log(`Użytkownik ${data.playerName} zalogowany jako gracz ${data.playerNumber}`);
    });

    client.emit("onconnect", {
        clientId: client.id
    });

    client.on("disconnect", (reason) => {
        console.log("klient się rozłącza", reason);
    });
});

app.use(express.static("dist"))

const users = []; 

let pawns = [
    [0, 2, 0, 2, 0, 2, 0, 2],
    [2, 0, 2, 0, 2, 0, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0]
];

app.get('/', (req, res) => {
    res.sendFile(__dirname + "index.html");
   
});
app.post('/pawns', (req, res) => {
    res.json({ pawns: pawns, player: undefined });
});
app.post('/login', express.json(), (req, res) => {
    const { username } = req.body;
    console.log(req.body)
    console.log(users.length);
    if (users.length == 1) {
        users.push(username);
        res.json({ success: true, message: "Witaj " + username + " , grasz bialymi", pawns, player: users.length });
    } else if (users.length == 0) {
        users.push(username);
        res.json({ success: true, message: "Witaj " + username + " , grasz czarnymi", pawns, player: users.length });
    } else {
        res.json({ success: false, message: "Witaj " + username + ", juz jest dwoch graczy" });
    }

});

app.get("/wait", (req, res) => {
    res.json({ users: users.length });
});

server.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})
