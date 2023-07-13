async function getAllCars() {
    let response = fetch("https://localhost:7147/api/Car/All").catch(() => console.log("error"));
    if (!await response) {
        return false;
    }
    return (await response).json();
}

async function login(email, password) {
    let formData = {
        email,
        password
    };

    if (!window.location.toString().includes("localhost")) {
        if (email == "adam@example.com" &&
            password == "password") {
            return true;
        } else {
            return false;
        }
    }

    let response = await fetch("https://localhost:7147/api/User/", {
        method: "POST",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(formData)
    }).catch(() => console.log("error"));

    if (response == undefined || response.status != 200) {
        return false;
    }

    let responseData = (response).text();
    localStorage.setItem('jwt', await responseData);

    return await responseData;
}

async function createCar(carName, carColour, carSku, carEngineSize, carEngineType) {
    let formData = {
        carName,
        carColour,
        carSku,
        carEngineSize,
        carEngineType
    };

    let response = fetch("https://localhost:7147/api/Car/", {
        method: "POST",
        headers: new Headers({
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('jwt')
        }),
        body: JSON.stringify(formData)
    }).catch(() => console.log("error"));

    if (!await response) {
        return false;
    }

    let responseData = (await response).json();

    return responseData;
}

async function getStats(){
    let response = await fetch("https://localhost:7147/api/Stats/");
    return {
        totalCars: await response.text(),
        usersOnline: 2,
        adminsOnline: 3,
    }
}

const apis = {
    getAllCars,
    login,
    createCar,
    getStats
}

export default apis;