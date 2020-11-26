import { INVALID_MOVE } from 'boardgame.io/core';

export function playCard(G, ctx, city, onLeft) {
    console.log("Play Card");
    
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