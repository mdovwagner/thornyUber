import { INVALID_MOVE } from 'boardgame.io/core';
import { carriages } from '../static/carriages';
import { endTurn } from './EndTurn';

function isGameOver(G, ctx) {
  for (let player in G.players) {
    // Check if all houses are gone
    if (G.players[player].houses === 0) return true; // Check if carriage is 7

    if (G.players[player].carriageNumber === 7) return true;
  }

  return false;
}

function isLastTurn(G, ctx) {
  // Conditions to win:
  // All houses gone, or carriage 7
  // AND it's the final person's turn
  console.log(G.players);
  console.log(isGameOver(G, ctx), ctx.currentPlayer, ctx.numPlayers.toString());
  return isGameOver(G, ctx) && ctx.currentPlayer === (ctx.numPlayers - 1).toString();
}

function getWinner(G, ctx) {
  let points = Array(ctx.numPlayers).fill(0);

  for (let player in G.players) {
    console.log(G.players); // + Carriage Points

    points[player] += carriages[G.players[player].carriageNumber].points; // + Bonus Tiles

    for (let bonus in G.players[player].bonuses) {
      for (let i in G.players[player].bonuses[bonus]) {
        points[player] += G.players[player].bonuses[bonus][i];
      }
    } // - Extra Houses


    points[player] -= G.players[player].houses;
  } // Get max


  let maxPlayer = -1;
  let maxPoints = -21;
  console.log(points);

  for (let p in points) {
    if (points[p] > maxPoints) {
      maxPoints = points[p];
      maxPlayer = p;
    }
  }

  console.log("winner: ", maxPlayer, maxPoints, points);
  return maxPlayer;
}

export function checkGameOver(G, ctx) {
  console.log("Check Game Over");

  if (isGameOver(G, ctx)) {
    let player = G.players[ctx.currentPlayer];

    if (G.bonuses["GameEnd"].length > 0) {
      if (!player.bonuses["GameEnd"]) player.bonuses["GameEnd"] = [];
      player.bonuses["GameEnd"].push(G.bonuses["GameEnd"][0]);
      G.bonuses["GameEnd"].shift();
    }
  }

  if (isLastTurn(G, ctx)) {
    console.log("Game Over"); // ctx.events.endGame({ winner: getWinner(G, ctx) });

    ctx.events.endGame({
      winnerIDs: [getWinner(G, ctx)]
    });
  }
}