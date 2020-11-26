import { INVALID_MOVE } from 'boardgame.io/core';
import { officials } from '../static/officials.js'

export function pickOfficial(G, ctx, official) {
    console.log("Pick Official");

    // If the official is valid, switch to that stage and invalidate all other officials
    console.log(G.players[ctx.currentPlayer].validOfficials[official]);
    if (G.players[ctx.currentPlayer].validOfficials[official] !== true) {
        // Invalid Official
        return INVALID_MOVE;
    }
    // Invalidate all Officials
    for (let official in G.players[ctx.currentPlayer].validOfficials) {
        G.players[ctx.currentPlayer].validOfficials[official] = false;
    }
    G.players[ctx.currentPlayer].official = official;

    switch (official) {
        case officials.POSTMASTER:
            ctx.events.setStage("draw");
            break;
        case officials.POSTALCARRIER:
            ctx.events.setStage("play");
            break;
        case officials.ADMINISTRATOR:
            // get rid of cards
            // ctx.events.setStage("administrator");
            // discardCards(G, ctx, playerTableau);
            break;
        default:
            return INVALID_MOVE;
    }
}