import { Net } from "./Net.js";
import { GameObject } from "./Main.js";
const wait = document.getElementById("wait")

const allEvents = {
    init() {
        document.getElementById('loginOverlay').style.display = 'flex';
        document.getElementById('loginBt').addEventListener('click', () => {
            const username = document.getElementById('username').value;
            Net.loginUser(username)
                .then(() => {
                    wait.style.display = 'flex';
                    document.getElementById('loginOverlay').style.display = 'none';
                    let inter = setInterval(async () => {
                        let res = await fetch("http://localhost:3000/wait");
                        let { users } = await res.json();

                        if (users == 2) {
                            clearInterval(inter);
                            wait.style.display = 'none';
                        }
                    }, 1000);
                })
                .catch(error => console.error('Błąd logowania:', error));
        });

    }
}

export { allEvents };