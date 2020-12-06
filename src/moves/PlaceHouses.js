import { INVALID_MOVE } from 'boardgame.io/core';
import { endTurn } from './EndTurn';
import { bonuses } from '../static/bonuses';
import { cities } from '../static/cities';


function checkRegion(cityStatus, currentPlayer, bonus) {
    for (let region in bonuses[bonus].regions) {
        for (let city in cities) {
            if (cities[city].region === bonuses[bonus].regions[region]) {
                if (!cityStatus[city][currentPlayer]) {
                    return false;
                }
            }
        }
    }
    return true;
}

function checkAll(cityStatus, currentPlayer, bonus) {
    let count = 0;
    for (let region in bonuses[bonus].regions) {
        for (let city in cities) {
            if (cities[city].region === bonuses[bonus].regions[region]) {
                if (cityStatus[city][currentPlayer]) {
                    count += 1;
                    break;
                }
            }
        }
    }
    // Make sure we got at least one city in every region
    return (count === bonuses[bonus].regions.length);
}

export function placeHouses(G, ctx) {
    console.log("Place Houses");
    
    let player = G.players[ctx.currentPlayer]
    let cities = player.selectedCities;
    for (let city in cities) {
        G.cityStatus[cities[city]][ctx.currentPlayer] = true;
        player.houses -= 1;
    }


    // Check for Region Bonuses
    for (let bonus in bonuses) {
        if (bonuses[bonus].type === "region") {
            if (checkRegion(G.cityStatus, ctx.currentPlayer, bonus) && !player.bonuses[bonus]) {
                if (G.bonuses[bonus].length > 0) {
                    if (!player.bonuses[bonus]) player.bonuses[bonus] = [];
                    player.bonuses[bonus].push(G.bonuses[bonus][0])
                    G.bonuses[bonus].shift()
                }
            }
        }
    }
    
    // Check for All Province Bonuses
    for (let bonus in bonuses) {
        if (bonuses[bonus].type === "all") {
            if (checkAll(G.cityStatus, ctx.currentPlayer, bonus) && !player.bonuses[bonus]) {
                if (G.bonuses[bonus].length > 0) {
                    if (!player.bonuses[bonus]) player.bonuses[bonus] = [];
                    player.bonuses[bonus].push(G.bonuses[bonus][0])
                    G.bonuses[bonus].shift()
                }
            }
        }
    }

    for (const card in G.players[ctx.currentPlayer].tableau) {
        G.discard.unshift(cities[card]);
    }
    G.players[ctx.currentPlayer].tableau = [];
    endTurn(G, ctx);

}