import { GameObject } from "./Main"

const allNetFunctions = {

    loginUser() {

        fetch("/addUser", options)
            .then(response => response.json())
            .then(data => {
                console.log('dodac usera')
                //  GameObject.setPlayer();

            })

            .catch(error => console.log(error));
    },

    resetUsers() {

        fetch("/resetUsers", options)
            .then(response => response.json())
            .then(data => {
                console.log('resecik')
                // działania po resecie
            })
            .catch(error => console.log(error));


    }
}

export { allNetFunctions }