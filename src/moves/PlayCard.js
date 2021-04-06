import { INVALID_MOVE } from 'boardgame.io/core';
import { edgeLookup } from '../static/edges';
import { officials } from '../static/officials';
import { changeMessage } from './Message';


export function playCard(G, ctx, city, onLeft) {
    console.log("Play Card");
    let player = G.players[ctx.currentPlayer];
    player.validOfficials[officials.POSTMASTER] = false;
    if (player.official === null) {
        player.validOfficials[officials.POSTALCARRIER] = true;
        player.validOfficials[officials.CARTWRIGHT] = true;
    }
    
    // Take card from hand and add it to tableau on left or right side.

    if (!player.hand.includes(city)) {
        // Can't play a city you don't have
        return INVALID_MOVE;
    }
    
    // Make sure the city is adjacent on the graph
    // if (edgeLookup[city][]
    var neighboringCity = (onLeft) ? player.tableau[0] : player.tableau.slice(-1)[0]; // Leftmost or rightmost card in tableau
    console.log(player);
    
    if (player.tableau.length > 0 && edgeLookup[city][neighboringCity] != 0) {
        // Has at least 1 card down AND the cards don't match
        changeMessage(G, ctx, { valid: true, text: city+ " and "+neighboringCity + " are not adjacent.", type: "error" });
        return INVALID_MOVE;
    }



    player.hand.splice(player.hand.indexOf(city),1);
    if (onLeft) {
        player.tableau.unshift(city)
    } else {
        player.tableau.push(city)
    }
    ctx.events.setStage("score");
}