import { INVALID_MOVE } from 'boardgame.io/core';

export function endTurn(G, ctx) {
    console.log("End Turn");
    ctx.events.endTurn();
    
}