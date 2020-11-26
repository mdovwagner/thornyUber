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
import { officials } from '../static/officials';


export class ThornyUbersTable extends React.Component {

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

  render() {
    let player = this.props.G.players[this.props.ctx.currentPlayer]
    const hStyle = { backgroundColor: "moccasin" };
    return (
      <div style={hStyle}>
        <Supply onClick={this.drawCard} cards={this.props.G.tableau}/>
        <ThornyUbersBoard cityStatus = {this.props.G.cityStatus} numPlayers = {this.props.ctx.numPlayers}/>
        <Player player={player} playCard={this.playCard} scoreCards={this.scoreCards} endTurn={() => this.props.events.endTurn()}/>

        <ButtonGroup variant="contained" color="primary">
          <Button color={(player.validOfficials[officials.POSTMASTER] ? "primary" : "secondary")}
                  onClick={() => this.props.moves.pickOfficial(officials.POSTMASTER)}>Post Master</Button>
          <Button color={(player.validOfficials[officials.POSTALCARRIER] ? "primary" : "secondary")}
                  onClick={() => this.props.moves.pickOfficial(officials.POSTALCARRIER)}>Postal Carrier</Button>
          <Button color={(player.validOfficials[officials.ADMINISTRATOR] ? "primary" : "secondary")}
                  onClick={() => this.props.moves.pickOfficial(officials.ADMINISTRATOR)}>Administrator</Button>
          <Button color={(player.validOfficials[officials.CARTWRIGHT] ? "primary" : "secondary")}
                  onClick={() => this.props.moves.pickOfficial(officials.CARTWRIGHT)}>Cartwright</Button>
        </ButtonGroup>
      </div>
    );
  }
}

