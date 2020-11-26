import { INVALID_MOVE } from 'boardgame.io/core';

export function placeHouses(G, ctx, cities) {
    console.log("Place Houses");

    let currPlayer = G.players[ctx.currentPlayer]
    for (let city in cities) {
        G.cityStatus[cities[city]][ctx.currentPlayer] = true;
    }

}