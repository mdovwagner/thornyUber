import { INVALID_MOVE } from 'boardgame.io/core';
import { cities } from '../static/cities.js';
import { officials } from '../static/officials.js'
import { shuffleCards } from './ShuffleCards.js';


function discardCards(G, ctx) {
    // Discard all 6 cards and draw new ones
    for (const card in G.tableau) {
        G.discard.unshift(G.tableau[card]);
    }
    G.tableau = [];
    for (let i = 0; i < 6; i++) {
        shuffleCards(G, ctx);
        G.tableau.push(G.supply.pop());
    }
}



export function pickOfficial(G, ctx, official) {
    console.log("Pick Official");

    // If the official is valid, switch to that stage and invalidate all other officials
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
            discardCards(G, ctx);
            break;
        default:
            return INVALID_MOVE;
    }
}