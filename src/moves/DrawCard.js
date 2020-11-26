import { INVALID_MOVE } from 'boardgame.io/core';

export function drawCard(G, ctx, city) {
    console.log("Draw Card");

    // Take card from tableau/supply and add it to the hand

    // If city is NULL, take the top card from the supply
    // Otherwise, take the card from the tableau and replace it from the supply
    if (city === null) {
        G.players[ctx.currentPlayer].hand.push(G.supply.pop());
    } else {
        if (G.tableau.includes(city)) {
            G.players[ctx.currentPlayer].hand.push(city);
            G.tableau[G.tableau.indexOf(city)] = G.supply.pop(); // Replace tableau card with next from supply
        } else {
            return INVALID_MOVE;
        }
    }
    ctx.events.setStage("play");
}