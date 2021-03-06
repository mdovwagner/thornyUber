import { officials } from '../static/officials.js';

class PlayerModel {
  constructor() {
    this.id = -1; // ID assigned by game

    this.cities = [];
    this.selectedCities = [];
    this.tableau = [];
    this.hand = [];
    this.carriageNumber = 2; // Next one is 3

    this.bonuses = {}; // map of bonus -> [points]

    this.houses = 20; // Start with 20 houses

    this.official = null; // Which support the player is using.

    this.validOfficials = {
      "postmaster": false,
      "postalCarrier": false,
      "administrator": false,
      "cartwright": false
    };
    this.message = {
      valid: false,
      text: "",
      type: "info" // error, warning, info, success  

    };
  }

}

export default PlayerModel;