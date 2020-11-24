import { INVALID_MOVE } from 'boardgame.io/core';

import { cities } from './static/cities'
import { drawCard } from './moves/DrawCard.js'
import { playCard } from './moves/PlayCard.js'

import PlayerModel from './models/PlayerModel'



// Return true if `cells` is in a winning configuration.
function IsVictory(cells) {
    const positions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
      [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];
  
    const isRowComplete = row => {
      const symbols = row.map(i => cells[i]);
      return symbols.every(i => i !== null && i === symbols[0]);
    };
  
    return positions.map(isRowComplete).some(i => i === true);
}

// Return true if all `cells` are occupied.
function IsDraw(cells) {
    return cells.filter(c => c === null).length === 0;
}

function setupGame (ctx) {
    let cells = Array(9).fill(null);

    let cityStatus = {}
    for (const city in cities) {
        cityStatus[city] = []; 
    }

    let players = {}
    for (let i = 0; i < ctx.numPlayers; i++) {
        players[i] = new PlayerModel()
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

    return {
            cells: cells,
            cityStatus: cityStatus,
            players: players,
            supply: supply,
            discard: discard,
            tableau: tableau
        };
}

const turns = {
    stages: {
        draw : { moves: { drawCard } },
        play: { moves: { playCard } },
        // score: { moves: { ScoreCard } },
        // postmaster: { moves: { DrawCard } },
        // postalCarrier: { moves: { PlayCard } },
        // administrator: { moves: { DiscardCard } }
    },
}

export const ThornyUber = {
    name: 'ThornyUber',
    setup: setupGame,

    moves : {
        clickCell: (G, ctx, id) => {
            if (G.cells[id] !== null) {
                return INVALID_MOVE;
            }
            G.cells[id] = ctx.currentPlayer;
        },
        drawCard : drawCard,
        playCard : playCard,
    },

    turn: turns,


    endIf: (G, ctx) => {
        if (IsVictory(G.cells)) {
          return { winner: ctx.currentPlayer };
        }
        if (IsDraw(G.cells)) {
          return { draw: true };
        }
      },
};