import { officials } from '../static/officials.js'

class PlayerModel {
    constructor () {
        this.cities = []
        this.tableau = []
        this.hand = []
        this.houses = 20 // Start with 20 houses
        this.official = null // Which support the player is using.
        this.validOfficials = {
            "postmaster" : true,
            "postalCarrier" : true,
            "administrator" : true,
            "cartwright" : true,
        }
    }
}

export default PlayerModel