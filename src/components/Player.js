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

import { playerColors } from '../static/playerColors'
import BonusChip from './BonusChip';


export class Player extends React.Component {


    render() {
        let player = this.props.player
        const hStyle = { backgroundColor: "moccasin" };

        const houses = Array(player.houses).fill(null);

        const bonusesStr = Object.keys(player.bonuses).map((bonus) => "Bonus: " + bonuses[bonus].id + " " + bonuses[bonus].points.reduce((x,y)=> x+y) + ", ")

        return (
            <div style={hStyle}>
                <h3>Hand</h3>
                <Hand hand={player.hand} onClick={this.props.playCard} />
                <h3>Tableau</h3>
                <Tableau tableau={player.tableau} />
                <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start">
                    {houses.map((house, idx) =>
                        <Grid key={idx} item>
                            <HomeIcon style={{ color: playerColors[this.props.currentPlayer].houseBackground }}/>
                        </Grid>
                    )}
                    </Grid>
                    <h5>Carriage: {player.carriageNumber}</h5>
                    {/* Bonuses */}
                    {Object.keys(player.bonuses).map((bonus) => 
                        player.bonuses[bonus].map((point) =>
                            <BonusChip bonus={bonus} point={point} />
                        )
                    )}
            </div>
        );
    }
}

