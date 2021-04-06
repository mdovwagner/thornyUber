import { INVALID_MOVE } from 'boardgame.io/core';
import { checkGameOver } from './CheckGameOver';
import { bonuses } from '../static/bonuses';
import { cities } from '../static/cities';
import { endTurn } from './EndTurn';
import { changeMessage } from './Message';


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

function isValidCities(G, ctx, cityNames) {
    // One in each color?
    let cityRegions = cityNames.map(city => cities[city].region);

    let allSame = cityRegions.every(region => region === cityRegions[0]);
    let hasDuplicates = cityRegions.filter((region, idx) => cityRegions.indexOf(region) != idx).length > 0;
    console.log(cityRegions, allSame, hasDuplicates);
    if (hasDuplicates && !allSame) {
        changeMessage(G, ctx, {valid: true, text: "Invalid House Placement", type: "error"});
    }
    return allSame || !hasDuplicates;
}


export function placeHouses(G, ctx) {
    console.log("Place Houses");
    
    let player = G.players[ctx.currentPlayer]
    let cityNames = player.selectedCities;
    if (isValidCities(G, ctx, cityNames)) {
        for (let city in cityNames) {
            G.cityStatus[cityNames[city]][ctx.currentPlayer] = true;
            player.houses -= 1;
        }
    } else {
        return INVALID_MOVE;
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
    for (let card in player.tableau) {
        G.discard.unshift(player.tableau[card]);
    }
    player.tableau = [];
    endTurn(G, ctx);

}