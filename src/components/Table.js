import React from 'react';
import { ThornyUbersBoard } from './Board';
import Hand from './Hand';
import Supply from './Supply';
import Tableau from './Tableau';
import './styles/card.css'
import './styles/board.css'
import { Player } from './Player';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import { officials } from '../static/officials';
import { Dialog } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';


export class ThornyUbersTable extends React.Component {
  constructor(props) {
    super(props);
    this.boardOpen = false;
  } 

  static propTypes = {
    events: PropTypes.any.isRequired,
  };

  drawCard = (city) => {
    console.log("Draw " + city);
    this.props.moves.drawCard(city);
  }

  playCard = (city) => {
    console.log("Play " + city);
    this.props.moves.playCard(city,true);
  }

  scoreCards = () => {
    console.log("Score Cards");
    this.props.moves.scoreCards();
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
    let player = this.props.G.players[this.props.ctx.currentPlayer]
    const hStyle = { backgroundColor: "moccasin" };
    return (
      <Grid container style={hStyle}>
        <Grid item xs={3}>
          <Supply onClick={this.drawCard} cards={this.props.G.tableau}/>
        </Grid>
        <Grid item xs={9}>
          <ThornyUbersBoard 
            cityStatus = {this.props.G.cityStatus} 
            numPlayers = {this.props.ctx.numPlayers}
            selectCity = {this.props.moves.selectCity}
            selectedCities = {player.selectedCities}
            tableau = {player.tableau}
            ctx = {this.props.ctx}
          />
        </Grid>
        <Grid item xs={2}>
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
        <Grid item xs={10}>
          <Player player={player} playCard={this.playCard} scoreCards={this.scoreCards} endTurn={this.endTurn}/>
        </Grid>
      </Grid>
    );
  }
}

