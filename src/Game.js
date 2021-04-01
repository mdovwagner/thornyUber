import { INVALID_MOVE } from 'boardgame.io/core';

import { cities } from './static/cities'
import { bonuses } from './static/bonuses'
import { drawCard } from './moves/DrawCard.js'
import { playCard } from './moves/PlayCard.js'
import { trashRoute } from './moves/TrashRoute.js'
import { scoreCards } from './moves/ScoreCards.js'
import { placeHouses } from './moves/PlaceHouses.js'
import { pickOfficial } from './moves/PickOfficial.js'
import { selectCity } from './moves/SelectCity.js'
import { endTurn } from './moves/EndTurn.js'

import PlayerModel from './models/PlayerModel'
import { officials } from './static/officials';
import { carriages } from './static/carriages';

function isGameOver(G, ctx) {
    for (let player in G.players) {
        // Check if all houses are gone
        if (G.players[player].houses === 0) return true;
        // Check if carriage is 7
        if (G.players[player].carriageNumber === 7) return true;
    }
    return false;
}

function isLastTurn(G, ctx) {
    // Conditions to win:
    // All houses gone, or carriage 7
    // AND it's the final person's turn
    return isGameOver(G, ctx) && (ctx.currentPlayer === ctx.numPlayers - 1);

}

function getWinner(G, ctx) {
    let points = Array(ctx.numPlayers).fill(0);
    for (let player in G.players) {
        console.log(G.players)
        // + Carriage Points
        points[player] += carriages[G.players[player].carriageNumber].points
        // + Bonus Tiles
        for (let bonus in G.players[player].bonuses) {
            for (let i in G.players[player].bonuses[bonus]){
                points[player] += G.players[player].bonuses[bonus][i];
            }
        }
        // - Extra Houses
        points[player] -= G.players[player].houses
    } 
    // Get max
    let maxPlayer = -1;
    let maxPoints = -21;
    for (let p in points) {
        if (points[p] > maxPoints) {
            maxPoints = points[p];
            maxPlayer = p;
        }
    }
    console.log("winner: ", maxPlayer, maxPoints, points)
    return maxPlayer;
}


function setupGame (ctx) {

    let cityStatus = {}
    for (const city in cities) {
        cityStatus[city] = Array(ctx.numPlayers).fill(false); 
    }

    let players = {}
    for (let i = 0; i < ctx.numPlayers; i++) {
        players[i] = new PlayerModel()
        players[i].id = i;
    }

    let supply = []
    for (const city in cities) {
        // Three copies of each card in the supply
        supply.push(city);
        supply.push(city);
        supply.push(city);
    }
    supply = ctx.random.Shuffle(supply)
    let discard = []

    let tableau = []
    for (let i = 0; i < 6; i++){
        tableau.push(supply.pop());
    }

    let gameBonuses = {}
    for (let bonus in bonuses) {
        gameBonuses[bonus] = bonuses[bonus].points;
    }
    console.log(gameBonuses)


    return {
            cityStatus: cityStatus,
            players: players,
            supply: supply,
            discard: discard,
            tableau: tableau,
            bonuses: gameBonuses,
        };
}

const turns = {
    onBegin: (G, ctx) => {
        G.players[ctx.currentPlayer].official = null
        for (let official in G.players[ctx.currentPlayer].validOfficials) {
            G.players[ctx.currentPlayer].validOfficials[official] = false;
        }
        G.players[ctx.currentPlayer].validOfficials[officials.ADMINISTRATOR] = true;
        G.players[ctx.currentPlayer].selectedCities = []
    },
    stages: {
        draw : { moves: { drawCard } },
        play: { moves: { playCard, pickOfficial, trashRoute } },
        score: { moves: { scoreCards, pickOfficial, endTurn } },
        place: { moves: { selectCity, placeHouses } },
        // administrator: { moves: { discardCard } } // -> draw card
    },
}

export const ThornyUber = {
    name: 'ThornyUber',
    setup: setupGame,

    moves : {
        pickOfficial: pickOfficial,
        drawCard : drawCard
    },

    turn: turns,


    endIf: (G, ctx) => {
        if (isLastTurn(G, ctx)) {
            console.log("Game Over");
            return { winner: getWinner(G, ctx) };
        }
      },
};