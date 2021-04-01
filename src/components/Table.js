import React from 'react';
import { ThornyUbersBoard } from './Board';
import Hand from './Hand';
import Supply from './Supply';
import Tableau from './Tableau';
import Bonuses from './Bonuses';
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
import ActionBar from './ActionBar';
import OtherTableaus from './OtherTableaus';


export class ThornyUbersTable extends React.Component {
  constructor(props) {
    super(props);
    this.boardOpen = false;
    this.board = React.createRef();
  } 

  static propTypes = {
    events: PropTypes.any.isRequired,
  };

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
    console.log("Highlight City");
    this.board.current.highlightCity(city);
  }

  unhighlightCity = (city) => {
    console.log("UnHighlight City");
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
    const hStyle = { backgroundColor: "moccasin" };
    return (
      <Grid container style={hStyle} spacing={3}>
        <Grid item xs={3}>
          <Supply onClick={this.drawCard} cards={this.props.G.tableau} 
            deck={this.props.G.supply} discard={this.props.G.discard}
            highlightCity = {this.highlightCity}
            unhighlightCity = {this.unhighlightCity}
            />
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
          <OtherTableaus players = {this.props.G.players} playerID = {this.props.playerID} />
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
        <Grid item xs={9}>
          <Player player={player} currentPlayer={this.props.ctx.currentPlayer}
                  playCard={this.playCard} scoreCards={this.scoreCards} endTurn={this.endTurn}
                  highlightCity={this.highlightCity} unhighlightCity={this.unhighlightCity}
                  />
        </Grid>
        <Grid item xs={12}>
          <ActionBar currentPlayer={this.props.ctx.currentPlayer} 
                    playerID = {this.props.playerID}
                    activePlayers={this.props.ctx.activePlayers} 
                    scoreCards={this.scoreCards} endTurn={this.endTurn}
                    trashRoute={this.trashRoute}
                    gameover={this.props.ctx.gameover}
          />
        </Grid>
        
      </Grid>
    );
  }
}

