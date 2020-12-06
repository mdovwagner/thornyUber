import React from 'react';
import { bonuses } from '../static/bonuses'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hand from './Hand';
import Tableau from './Tableau';
import './styles/card.css'
import { playerColors } from '../static/playerColors'
import { List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@material-ui/core';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import SendIcon from '@material-ui/icons/Send';
import DoneIcon from '@material-ui/icons/Done';

export default function ActionBar(props) {
    let message = "Draw a Card";
    let buttons = []
    const hStyle = {
        position: "fixed",
        bottom: 0}
    if (props.activePlayers !== null) {
        let stage = props.activePlayers[props.currentPlayer];
        switch(stage) {
            case "draw": 
                message = "Draw a Card";
                break;
            case "play": 
                message = "Play a Card";
                break;
            case "score": 
                message = "Score a Route";
                buttons = [<Button variant="contained" color="primary" onClick={props.scoreCards} endIcon={<SendIcon />}>
                            Score
                        </Button>,
                        <Button variant="contained" color="primary" onClick={props.endTurn} endIcon={<DoneIcon />}>
                            End Turn
                        </Button>]
                break;
            case "place": 
                message = "Place Houses";
                buttons = [<Button variant="contained" color="primary" onClick={props.endTurn} endIcon={<DoneIcon />}>
                            Done
                        </Button>]
                break;
        }
    }


    return (
        <Paper style={hStyle}>
            <h2>{message}</h2>
            {buttons}
        </Paper>
    );
}

