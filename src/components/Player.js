import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SendIcon from '@material-ui/icons/Send';
import DoneIcon from '@material-ui/icons/Done';
import HomeIcon from '@material-ui/icons/Home';
import Hand from './Hand';
import Tableau from './Tableau';
import './styles/card.css'
import { bonuses } from '../static/bonuses';
import { carriages } from '../static/carriages';

import { playerColors } from '../static/playerColors'
import BonusChip from './BonusChip';
import { Paper } from '@material-ui/core';


export class Player extends React.Component {

    renderHouses(id) {
        const houseColor = playerColors[id].houseBackground
                // let move = "translate(" + (city.x + dx[i]) + " " + (city.y + dy[i]) + ") scale(0.05)"

        const houseStyle = {
            fill: houseColor,
            strokeWidth: 10,
            stroke: "black",
        }
        return (
            <svg transform="translate(-45 -35) scale(0.5)" style={houseStyle}>
                <path d="m437.15 499.44zl-162.81-144.19-162.91 144.25v206.12c0 5.3234 4.3016 9.5938 9.625 9.5938h101.81v-90.375c0-5.3234 4.2704-9.625 9.5938-9.625h83.656c5.3234 0 9.5938 4.3016 9.5938 9.625v90.375h101.84c5.3234 0 9.5938-4.2704 9.5938-9.5938v-206.19zm-325.72 0.0625z" />
                <path d="m273.39 276.34-231.05 204.58 24.338 27.457 207.66-183.88 207.61 183.88 24.291-27.457-231-204.58-0.89792 1.0397-0.94518-1.0397z" />
            </svg>
        );
    }


    renderCarriage(num) {
        const bgStyle = {
            fill: "gold",
            strokeWidth: 1,
            stroke: "black"
        }
        const shieldStyle = {
            fill: "tan",
            stroke: "black"
        }
        const wheelStyle = {
            fill: "gold",
            stroke: "black"
        }
        let dxs = [15, 35, 55, 75, 95, 15, 35].slice(0, num)
        let dys = [15, 15, 15, 15, 15, 35, 35].slice(0, num)
        return (
            <svg width="110" height="60">
                <rect x="2" y="2" width="106" height="56" style={bgStyle} />
                <path d="M 6 9 C 6 24 6 24 18 32 C 30 24 30 24 30 9 L 6 9"
                    style={shieldStyle}
                    transform="translate(70 20)"
                />
                <text x="18" y="25" textAnchor="middle" transform="translate(70 20)">{carriages[num].points}</text>
                {/* Wheel */}
                {dxs.map( (x, i) =>
                    <svg>
                    <circle cx={x} cy={dys[i]} r="8" style={wheelStyle} />
                    <line x1={x-10} y1={dys[i]} x2={x+10} y2={dys[i]} stroke="black"/>
                    <line x1={x} y1={dys[i]-10} x2={x} y2={dys[i]+10} stroke="black"/>
                    <line x1={x-7} y1={dys[i]-7} x2={x+7} y2={dys[i]+7} stroke="black"/>
                    <line x1={x-7} y1={dys[i]+7} x2={x+7} y2={dys[i]-7} stroke="black"/>
                    </svg>
                    )}
            </svg>
        );
    }


    render() {
        let player = this.props.player

        const houses = Array(player.houses).fill(null);

        const bonusesStr = Object.keys(player.bonuses).map((bonus) => "Bonus: " + bonuses[bonus].id + " " + bonuses[bonus].points.reduce((x,y)=> x+y) + ", ")

        return (
            <Paper>
                <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start">
                <Grid item xs={4}>Hand
                <Hand hand={player.hand} onClick={this.props.playCard} tableau={player.tableau} highlightCity={this.props.highlightCity} unhighlightCity={this.props.unhighlightCity} />
                </Grid>
                <Grid item xs={4}>
                Tableau
                <Tableau tableau={player.tableau} highlightCity={this.props.highlightCity} unhighlightCity={this.props.unhighlightCity}/>
                </Grid>
                <Grid item xs={2}container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start">
                    {houses.map((house, idx) =>
                        <Grid key={idx} item>
                            <HomeIcon style={{ color: playerColors[player.id].houseBackground, stroke: "black"}}/>
                        </Grid>
                    )}
                </Grid>
                    <Grid item xs={2}>Carriage: {this.renderCarriage(player.carriageNumber)}
                    {/* Bonuses */}
                    {Object.keys(player.bonuses).map((bonus) => 
                        player.bonuses[bonus].map((point) =>
                            <BonusChip key={bonus + point} bonus={bonus} point={point} />
                        )
                    )}
                    </Grid>
            </Grid>
            </Paper>
        );
    }
}

