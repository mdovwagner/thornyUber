import { INVALID_MOVE } from 'boardgame.io/core';
import { placeHouses } from './PlaceHouses';
import { officials } from '../static/officials';


export function scoreCards(G, ctx) {
    console.log("Score Cards");
    G.players[ctx.currentPlayer].validOfficials[officials.POSTALCARRIER] = false;

    // Take card from hand and add it to tableau on left or right side.
    let playerTableau = G.players[ctx.currentPlayer].tableau;
    console.log(G.players[ctx.currentPlayer])
    console.log(playerTableau)

    // Check for points and carriages 

    // Remove cards from tableau and add to discard
    // Go to placing mode 
    ctx.events.setStage("place");
}