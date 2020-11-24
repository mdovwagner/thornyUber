class PlayerModel {
    constructor () {
        this.cities = []
        this.tableau = []
        this.hand = []
        this.houses = 20 // Start with 20 houses
        this.support = null // Which support the player is using.
    }
}

export default PlayerModel