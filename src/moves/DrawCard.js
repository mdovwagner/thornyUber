import { INVALID_MOVE } from 'boardgame.io/core';
import { officials } from '../static/officials';
import { shuffleCards } from './ShuffleCards';
import { setOfficial } from './PickOfficial';

export function drawCard(G, ctx, city) {
    G.newTurn = false;
    let stage = ctx.activePlayers[ctx.currentPlayer];
    console.log("Draw Card from " + stage);

    G.players[ctx.currentPlayer].validOfficials[officials.ADMINISTRATOR] = false;
    if (G.players[ctx.currentPlayer].official === null) {
        G.players[ctx.currentPlayer].validOfficials[officials.POSTMASTER] = true;
    }
    if (stage === "play") {
        // Using POSTMASTER
        if (G.players[ctx.currentPlayer].official !== null) {
            // Already used POSTMASTER
            return INVALID_MOVE;
        }
        setOfficial(G, ctx, officials.POSTMASTER);
    }
    // Take card from tableau/supply and add it to the hand
    shuffleCards(G, ctx);
    
    // If city is NULL, take the top card from the supply
    // Otherwise, take the card from the tableau and replace it from the supply
    if (city === null) {
        G.players[ctx.currentPlayer].hand.push(G.supply.pop());
        // Reshuffle deck if it's empy
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