
import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { api } from "./AxiosService.js"

const _sandboxApi = axios.create({
    baseURL: "https://sandbox.codeworksacademy.com",
    timeout: 8000
})

class HousesService {
    constructor() {
        console.log("hello from the houzez service")
    }

    async getHouses() {
        const response = await api.get('api/houses')
        const mappedHouses = response.data.map(dataObj => new House(dataObj))
        AppState.houses = mappedHouses
    }
}

export const housesService = new HousesService()