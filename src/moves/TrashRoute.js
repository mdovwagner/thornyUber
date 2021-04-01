import { INVALID_MOVE } from 'boardgame.io/core';
import { edgeLookup } from '../static/edges';
import { officials } from '../static/officials';


export function trashRoute(G, ctx) {
    console.log("Trashed");
    let player = G.players[ctx.currentPlayer];
    console.log(player)
    // Removes all cards from Route
    for (let card in player.tableau) {
        G.discard.unshift(player.tableau[card]);
    }
    player.tableau = [];
    console.log(player.tableau)
    ctx.events.setStage("play");
}