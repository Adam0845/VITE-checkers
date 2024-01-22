import { allNetFunctions } from "./Net"
const allEvents = {

    init() {

        document.getElementById("loginBt").onclick = function () {

            console.log("loginbt");

            allNetFunctions.loginUser(userName)
        }

        document.getElementById("resetBt").onclick = function () {

            console.log("resetBt");

            allNetFunctions.resetUsers()
        }

    }

}

export { allEvents }