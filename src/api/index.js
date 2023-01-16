import axios from "axios";

const api = axios.create({
    baseURL: "https://swapi.dev/api/"
})

const getPlanets = async () => {
    try {
        const data = api.get("planets/")
        return data
    } catch (error) {
        console.log("Error", error);
    }
}

export { getPlanets }