import React from 'react';
import { ThornyUbersBoard } from './Board';
import Hand from './Hand';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Supply from './Supply';
import SnackbarDialog from './SnackbarDialog';
import Tableau from './Tableau';
import Bonuses from './Bonuses';
import "./styles/thornyubers.css";
import { Player } from './Player';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { officials } from '../static/officials';
import { Dialog, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { DialogContent } from '@material-ui/core';
import ActionBar from './ActionBar';
import OtherTableaus from './OtherTableaus';
import { playerColors } from '../static/playerColors';
import Officials from './Officials';
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#D2B48C"
    },
    primary: {
      main: "#664229"
    },
    disabled: {
      main: "#E5D3B3"
    }
  }
});
export class ThornyUbersTable extends React.Component {
  constructor(props) {
    super(props);

    this.endMessage = () => {
      this.props.moves.endMessage(this.props.playerID);
    };

    this.alertPlayer = () => {
      this.props.moves.changeMessage({
        valid: true,
        text: "You're taking too long. Stop being a David Green",
        type: "warning"
      });
    };

    this.drawCard = (event, city) => {
      console.log("Draw " + city);
      this.props.moves.drawCard(city);
    };

    this.playCard = (city, isLeft) => {
      console.log("Play " + city);
      this.props.moves.playCard(city, isLeft);
    };

    this.trashRoute = () => {
      console.log("Trash Route");
      this.props.moves.trashRoute();
    };

    this.scoreCards = () => {
      console.log("Score Cards");
      this.props.moves.scoreCards();
    };

    this.highlightCity = city => {
      this.board.current.highlightCity(city);
    };

    this.unhighlightCity = city => {
      this.board.current.unhighlightCity(city);
    };

    this.endTurn = () => {
      console.log("Place Cities / End Turn");
      const stage = this.props.ctx.activePlayers[this.props.ctx.currentPlayer];

      if (stage === "score") {
        this.props.moves.endTurn();
      } else if (stage === "place") {
        this.props.moves.placeHouses();
      }
    };

    this.boardOpen = false;
    this.board = /*#__PURE__*/React.createRef();
  }

  render() {
    let player = this.props.G.players[this.props.playerID];
    let bgColor = "#E5D3B3";

    if (this.props.ctx.gameover) {
      bgColor = playerColors[this.props.ctx.gameover.winner].houseBackground;
    }

    const hStyle = {
      backgroundColor: bgColor
    };
    const myTurn = this.props.ctx.currentPlayer === this.props.playerID;
    const stage = this.props.ctx.activePlayers[this.props.ctx.currentPlayer];
    return /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(Grid, {
      container: true,
      style: hStyle,
      spacing: 3
    }, /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 3
    }, /*#__PURE__*/React.createElement(Officials, {
      player: player,
      moves: this.props.moves
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Supply, {
      onClick: this.drawCard,
      cards: this.props.G.tableau,
      deck: this.props.G.supply,
      discard: this.props.G.discard,
      stage: stage,
      myTurn: myTurn,
      official: player.official,
      highlightCity: this.highlightCity,
      unhighlightCity: this.unhighlightCity
    })), /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 6
    }, /*#__PURE__*/React.createElement(ThornyUbersBoard, {
      ref: this.board,
      cityStatus: this.props.G.cityStatus,
      numPlayers: this.props.ctx.numPlayers,
      selectCity: this.props.moves.selectCity,
      selectedCities: player.selectedCities,
      tableau: player.tableau,
      ctx: this.props.ctx,
      myTurn: myTurn,
      stage: stage,
      highlightCity: this.highlightCity
    })), /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 3
    }, /*#__PURE__*/React.createElement(Bonuses, {
      bonuses: this.props.G.bonuses
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(OtherTableaus, {
      players: this.props.G.players,
      playerID: this.props.playerID,
      matchData: this.props.matchData
    })), /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 9
    }, /*#__PURE__*/React.createElement(Player, {
      player: player,
      currentPlayer: this.props.ctx.currentPlayer,
      playCard: this.playCard,
      scoreCards: this.scoreCards,
      endTurn: this.endTurn,
      highlightCity: this.highlightCity,
      unhighlightCity: this.unhighlightCity,
      myTurn: myTurn,
      stage: stage
    })), /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 3
    }, /*#__PURE__*/React.createElement(Paper, null, "Log")), /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 12
    }, /*#__PURE__*/React.createElement(ActionBar, {
      currentPlayer: this.props.ctx.currentPlayer,
      playerID: this.props.playerID,
      activePlayers: this.props.ctx.activePlayers,
      scoreCards: this.scoreCards,
      endTurn: this.endTurn,
      trashRoute: this.trashRoute,
      alertPlayer: this.alertPlayer,
      gameover: this.props.ctx.gameover,
      administrator: () => this.props.moves.administrator(),
      myTurn: myTurn
    }))), /*#__PURE__*/React.createElement(SnackbarDialog, {
      playerID: this.props.playerID,
      message: player.message,
      endMessage: this.endMessage
    }));
  }

}
ThornyUbersTable.propTypes = {
  events: PropTypes.any.isRequired
};