
import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { Pop } from "../utils/Pop.js"
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
        try {
            const response = await api.get('api/houses')
            const mappedHouses = response.data.map(dataObj => new House(dataObj))
            AppState.houses = mappedHouses
        } catch (error) {
            Pop.error(error.message)
        }
    }

    async createHouse(formData) {
        try {
            const res = await api.post('api/houses', formData)
            const newHouse = new House(res.data)
            AppState.houses.push(newHouse)
            AppState.emit('houses')
        } catch (error) {
            Pop.error(error.message)
        }
    }

    async deleteHouse(houseId) {
        try {
            debugger
            const res = await api.delete(`api/houses/${houseId}`)
            let updatedHouses = AppState.houses.filter(h => h.id != houseId)
            AppState.houses = updatedHouses
        } catch (error) {
            Pop.error(error.message)
        }
    }
}

export const housesService = new HousesService()