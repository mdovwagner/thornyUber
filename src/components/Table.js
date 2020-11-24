import React from 'react';
import { ThornyUbersBoard } from './Board';
import Hand from './Hand';
import  Supply from './Supply';
import './styles/card.css'

export class ThornyUbersTable extends React.Component {

  onClick = (city) => {
    console.log("Clicked on " + city);
    this.props.moves.drawCard(city);
    let i = this.props.G.tableau[0]
    console.log(i);
  }

  render() {
    let player = this.props.G.players[this.props.ctx.currentPlayer]
    const hStyle = { backgroundColor: "moccasin" };
    return (
      <div style={hStyle}>
        <Supply onClick={this.onClick} cards={this.props.G.tableau}/>
        <ThornyUbersBoard />
        <Hand hand={player.hand} />
      </div>
    );
  }
}

