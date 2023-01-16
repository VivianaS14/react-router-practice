import axios from "axios";
import config from "../config"

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

const getPlanetDetail = async (id) => {
    const data = await api.get(`${config.routes.PLANETS}/${id}`)
    return data
}

export { getPlanets, getPlanetDetail }