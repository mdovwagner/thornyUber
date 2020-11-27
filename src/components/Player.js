import React from 'react';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import DoneIcon from '@material-ui/icons/Done';
import Hand from './Hand';
import Tableau from './Tableau';
import './styles/card.css'


export class Player extends React.Component {


    render() {
        let player = this.props.player
        const hStyle = { backgroundColor: "moccasin" };
        return (
            <div style={hStyle}>
                <h3>Hand</h3>
                <Hand hand={player.hand} onClick={this.props.playCard} />
                <h3>Tableau</h3>
                <Tableau tableau={player.tableau} />
                <Button variant="contained" color="primary" onClick={this.props.scoreCards} endIcon={<SendIcon />}>
                    Score
                </Button>
                <Button variant="contained" color="primary" onClick={this.props.endTurn} endIcon={<DoneIcon />}>
                    End Turn
                </Button>
            </div>
        );
    }
}

