import { INVALID_MOVE } from 'boardgame.io/core';
import { placeHouses } from './PlaceHouses';
import { officials } from '../static/officials';
import { bonuses } from '../static/bonuses';


export function scoreCards(G, ctx) {
    console.log("Score Cards");
    let player = G.players[ctx.currentPlayer];
    player.validOfficials[officials.POSTALCARRIER] = false;
    

    // Check for carriages
    if (player.tableau.length > player.carriageNumber) {
        // Incr carriage number if player played a longer road
        player.carriageNumber += 1;
    } else if (player.official === officials.CARTWRIGHT) {
        // Need 2 fewer cards to get a carriage
        if (player.tableau.length + 2 > player.carriageNumber) {
            // Incr carriage number if player played a longer road
            player.carriageNumber += 1;
        }
    }

    // Check for bonuses
    if (player.tableau.length === 7) {
        // If any bonuses exist
        if (G.bonuses["Distance7"].length > 0) {
            // Add bonus to player's bonuses
            player.bonuses["Distance7"].push(G.bonuses["Distance7"][0])
            // Remove bonus from pile
            G.bonuses["Distance7"].shift()
        }
    }
    if (player.tableau.length === 6) {
        if (G.bonuses["Distance6"].length > 0) {
            if (!player.bonuses["Distance6"]) player.bonuses["Distance6"] = [];
            player.bonuses["Distance6"].push(G.bonuses["Distance6"][0])
            G.bonuses["Distance6"].shift()
        }
    }
    if (player.tableau.length === 5) {
        if (G.bonuses["Distance5"].length > 0) {
            if (!player.bonuses["Distance5"]) player.bonuses["Distance5"] = [];
            player.bonuses["Distance5"].push(G.bonuses["Distance5"][0])
            G.bonuses["Distance5"].shift()
        }
    }

    // Go to placing mode 
    ctx.events.setStage("place");
}