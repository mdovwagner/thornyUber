import { INVALID_MOVE } from 'boardgame.io/core';
import { endTurn } from './EndTurn';

export function placeHouses(G, ctx) {
    console.log("Place Houses");

    let cities = G.players[ctx.currentPlayer].selectedCities;
    for (let city in cities) {
        G.cityStatus[cities[city]][ctx.currentPlayer] = true;
    }

    for (const card in G.players[ctx.currentPlayer].tableau) {
        G.discard.push(cities[card]);
    }
    G.players[ctx.currentPlayer].tableau = [];
    endTurn(G, ctx);

}