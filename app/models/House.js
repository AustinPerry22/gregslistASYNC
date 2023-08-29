import { AppState } from "../AppState.js"

export class House {
    constructor(data) {
        this.id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.creatorId = data.creatorId
        this.creator = data.creator
    }

    get template() {
        return `${this.price}, ${this.description} ${this.computedDeleteButton}`
    }

    get computedDeleteButton() {
        //debugger
        if (AppState.account == null || AppState.account.id != this.creatorId) return ''

        return `<button class="btn btn-danger" onclick="app.HousesController.deleteHouse('${this.id}')">delete</button>`
    }
}
