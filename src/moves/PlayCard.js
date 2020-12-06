import { INVALID_MOVE } from 'boardgame.io/core';
import { officials } from '../static/officials';


export function playCard(G, ctx, city, onLeft) {
    console.log("Play Card");
    G.players[ctx.currentPlayer].validOfficials[officials.POSTMASTER] = false;
    if (G.players[ctx.currentPlayer].official === null) {
        G.players[ctx.currentPlayer].validOfficials[officials.POSTALCARRIER] = true;
        G.players[ctx.currentPlayer].validOfficials[officials.CARTWRIGHT] = true;
    }
    
    // Take card from hand and add it to tableau on left or right side.
    let playerHand = G.players[ctx.currentPlayer].hand;

    if (!playerHand.includes(city)) {
        return INVALID_MOVE;
    }

    playerHand.splice(playerHand.indexOf(city),1);
    if (onLeft) {
        G.players[ctx.currentPlayer].tableau.unshift(city)
    } else {
        G.players[ctx.currentPlayer].tableau.push(city)
    }
    ctx.events.setStage("score");
}