async function getAllCars(){
    let response = fetch("https://localhost:7147/api/Car/All");
    return (await response).json();
}

const apis = {
    getAllCars
}

export default apis;