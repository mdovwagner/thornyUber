import { INVALID_MOVE } from 'boardgame.io/core';
import { edgeLookup } from '../static/edges';
import { officials } from '../static/officials';
import { endTurn } from './EndTurn';
import { changeMessage } from './Message';
import { setOfficial } from './PickOfficial';


export function playCard(G, ctx, city, onLeft) {
    let stage = ctx.activePlayers[ctx.currentPlayer];
    console.log("Play Card from " + stage);
    let player = G.players[ctx.currentPlayer];
    player.validOfficials[officials.POSTMASTER] = false;
    if (player.official === null) {
        player.validOfficials[officials.POSTALCARRIER] = true;
        player.validOfficials[officials.CARTWRIGHT] = true;
    }
    if (stage === "score") {
        // Using POSTALCARRIER
        if (G.players[ctx.currentPlayer].official !== null) {
            // Already used POSTALCARRIER
            return INVALID_MOVE;
        }
        setOfficial(G, ctx, officials.POSTALCARRIER);
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

    if ((G.players[ctx.currentPlayer].official !== null || player.hand.length === 0) && player.tableau.length < 3) {
        // (Already played an official OR no cards in hand) AND cannot score (< 3)
        endTurn(G, ctx);
    }
    ctx.events.setStage("score");
}