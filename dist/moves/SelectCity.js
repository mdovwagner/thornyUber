import { INVALID_MOVE } from 'boardgame.io/core';
import { isValidElement } from 'react';

function isValidCity(player, city, selectedCities) {
  // TODO: Add logic that it's okay to place here
  if (!player.tableau.includes(city)) return false;
  return true;
}

export function selectCity(G, ctx, city) {
  // Take card from hand and add it to tableau on left or right side.
  let selectedCities = G.players[ctx.currentPlayer].selectedCities;
  let player = G.players[ctx.currentPlayer];

  if (selectedCities.includes(city)) {
    // If in list, remove it
    selectedCities.splice(selectedCities.indexOf(city), 1);
  } else {
    // Add it
    if (isValidCity(player, city, selectedCities)) {
      console.log("Select City: " + city);
      selectedCities.push(city);
    } else {
      return;
    }
  }
}