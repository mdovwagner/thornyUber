import React from 'react';
import { ThornyUbersBoard } from './Board';
import Hand from './Hand';
import { createMuiTheme,makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Supply from './Supply';
import SnackbarDialog from './SnackbarDialog';
import Tableau from './Tableau';
import Bonuses from './Bonuses';
import './styles/card.css'
import './styles/board.css'
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

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#D2B48C",
    },
    primary: {
      main: "#664229",
    },
    disabled: {
      main: "#E5D3B3"
    }
  },
});

export class ThornyUbersTable extends React.Component {
  constructor(props) {
    super(props);
    this.boardOpen = false;
    this.board = React.createRef();
  } 

  static propTypes = {
    events: PropTypes.any.isRequired,
  };

  endMessage = () => {
    this.props.moves.endMessage(this.props.playerID);
  }

  alertPlayer = () => {
    this.props.moves.changeMessage({valid: true, text: "You're taking too long. Stop being a David Green", type: "warning"});
  }

  drawCard = (event, city) => {
    console.log("Draw " + city);
    this.props.moves.drawCard(city);
  }

  playCard = (city, isLeft) => {
    console.log("Play " + city);
    this.props.moves.playCard(city,isLeft);
  }

  trashRoute = () => {
    console.log("Trash Route");
    this.props.moves.trashRoute();
  }

  scoreCards = () => {
    console.log("Score Cards");
    this.props.moves.scoreCards();
  }

  highlightCity = (city) => {
    this.board.current.highlightCity(city);
  }

  unhighlightCity = (city) => {
    this.board.current.unhighlightCity(city);
  }

  endTurn = () => {
    console.log("Place Cities / End Turn");
    const stage = this.props.ctx.activePlayers[this.props.ctx.currentPlayer];
    if (stage === "score") {
      this.props.moves.endTurn();
    } else if (stage === "place") {
      this.props.moves.placeHouses();
    }
  }

  render() {
    let player = this.props.G.players[this.props.playerID]
    let bgColor = "#E5D3B3"
    if (this.props.ctx.gameover) {
      bgColor = playerColors[this.props.ctx.gameover.winner].houseBackground;
    }
    const hStyle = { backgroundColor: bgColor };

    const myTurn = (this.props.ctx.currentPlayer === this.props.playerID);
    return (
      <ThemeProvider theme={theme}>
      <Grid container style={hStyle} spacing={3}>
        <Grid item xs={3}>
          <Supply onClick={this.drawCard} cards={this.props.G.tableau} 
            deck={this.props.G.supply} discard={this.props.G.discard}
            highlightCity = {this.highlightCity}
            unhighlightCity = {this.unhighlightCity}
            />
          <br/>
          <ButtonGroup variant="contained" color="primary" orientation="vertical">
            <Button color="primary"
              disabled={(player.validOfficials[officials.POSTMASTER] ? false : true)}
              onClick={() => this.props.moves.pickOfficial(officials.POSTMASTER)}>Post Master</Button>
            <Button color="primary"
              disabled={(player.validOfficials[officials.POSTALCARRIER] ? false : true)}
              onClick={() => this.props.moves.pickOfficial(officials.POSTALCARRIER)}>Postal Carrier</Button>
            <Button color="primary"
              disabled={(player.validOfficials[officials.ADMINISTRATOR] ? false : true)}
              onClick={() => this.props.moves.pickOfficial(officials.ADMINISTRATOR)}>Administrator</Button>
            <Button color="primary"
              disabled={(player.validOfficials[officials.CARTWRIGHT] ? false : true)}
              onClick={() => this.props.moves.pickOfficial(officials.CARTWRIGHT)}>Cartwright</Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={6}>
          <ThornyUbersBoard 
            ref = {this.board}
            cityStatus = {this.props.G.cityStatus} 
            numPlayers = {this.props.ctx.numPlayers}
            selectCity = {this.props.moves.selectCity}
            selectedCities = {player.selectedCities}
            tableau = {player.tableau}
            ctx = {this.props.ctx}
            highlightCity = {this.highlightCity}
          />
        </Grid>
        <Grid item xs={3}>
          <Bonuses bonuses={this.props.G.bonuses} />
          <br />
          <OtherTableaus players = {this.props.G.players} playerID = {this.props.playerID} />
        </Grid>

        <Grid item xs={9}>
          <Player player={player} currentPlayer={this.props.ctx.currentPlayer}
                  playCard={this.playCard} scoreCards={this.scoreCards} endTurn={this.endTurn}
                  highlightCity={this.highlightCity} unhighlightCity={this.unhighlightCity}
                  />
        </Grid>
        <Grid item xs={3}>
          <Paper>
            Log
            </Paper>
        </Grid>
        <Grid item xs={12}>
          <ActionBar currentPlayer={this.props.ctx.currentPlayer} 
                    playerID = {this.props.playerID}
                    activePlayers={this.props.ctx.activePlayers} 
                    scoreCards={this.scoreCards} endTurn={this.endTurn}
                    trashRoute={this.trashRoute}
                    alertPlayer={this.alertPlayer}
                    gameover={this.props.ctx.gameover}
          />
        </Grid>
        
      </Grid>
      <SnackbarDialog playerID = {this.props.playerID} message={player.message} endMessage={this.endMessage}/>
      </ThemeProvider>
    );
  }
}

