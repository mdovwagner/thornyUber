import { INVALID_MOVE } from 'boardgame.io/core';
import { checkGameOver } from './CheckGameOver';
export function endTurn(G, ctx) {
  console.log("End Turn");
  checkGameOver(G, ctx);
  ctx.events.endTurn();
}