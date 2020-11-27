import { INVALID_MOVE } from 'boardgame.io/core';
import { isValidElement } from 'react';

function isValidCity(city, selectedCities) {
    // TODO: Add logic that it's okay to place here
    return true;
}

export function selectCity(G, ctx, city) {
    console.log("Select City: "+ city);

    // Take card from hand and add it to tableau on left or right side.
    let selectedCities = G.players[ctx.currentPlayer].selectedCities;

    if (selectedCities.includes(city)) {
        // If in list, remove it
        selectedCities.splice(selectedCities.indexOf(city), 1);
    } else {
        // Add it
        if (isValidCity(city, selectedCities)) {
            selectedCities.push(city);
        } else {
            return INVALID_MOVE;
        }
    }
}