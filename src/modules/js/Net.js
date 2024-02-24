import Camera from "./Camera";
import { GameObject } from "./Main";
import { io } from "https://cdn.socket.io/4.6.0/socket.io.esm.min.js";

const client = io("ws://localhost:3000");

client.on("onconnect", (data) => {
    console.log(data.clientId);
});

const nav = document.getElementById("nav")

const Net = {
    async loginUser(userName) {
        try {
            const response = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username: userName }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            console.log(data.success)
            if (data.success) {

                console.log(data.message, "player: ", data.player);
                nav.innerHTML = data.message;
                console.log(data.pawns)
                GameObject.render(data.player, data.pawns);

            } else {
                // nav.innerHTML = data.message
                console.error(data.message, "player: ", data.player);
                nav.innerHTML = data.message;
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    },
};

export { Net };
