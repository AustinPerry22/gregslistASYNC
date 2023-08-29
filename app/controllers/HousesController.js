import { AppState } from "../AppState.js"
import { housesService } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawHouses() {
    let content = ''
    AppState.houses.forEach(h => content += h.template)
    setHTML('housesList', content)
}

export class HousesController {
    constructor() {
        console.log('hello from da housez controller')
        this.getHouses()
        AppState.on('houses', _drawHouses)
        AppState.on('account', _drawHouses)
    }

    async getHouses() {
        try {
            await housesService.getHouses()
        } catch (error) {
            Pop.error(error.message)
        }
    }

    async createHouse() {
        try {
            window.event.preventDefault()
            const form = window.event.target
            let formData = getFormData(form)
            await housesService.createHouse(formData)
        } catch (error) {
            Pop.error(error.message)
        }
    }

    async deleteHouse(houseId) {
        try {
            window.event.preventDefault()
            await housesService.deleteHouse(houseId)
        } catch (error) {
            Pop.error(error.message)
        }
    }
}