import React from 'react';
import { bonuses } from '../static/bonuses'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hand from './Hand';
import Tableau from './Tableau';
import './styles/card.css'
import { playerColors } from '../static/playerColors'
import { List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';

export default function ActionBar(props) {

    let message = "Draw a Card";
    let buttons = []
    const hStyle = {
        // position: "fixed",
        backgroundColor: "tan",
        bottom: 0}

    if (props.playerID !== props.currentPlayer) {
        message = "Wait for your turn...";
        buttons = [<Button key="timer" variant="contained" color="primary" onClick={props.alertPlayer} endIcon={<HourglassEmptyIcon />}>
                    David Green taking too long...
                    </Button>]
    } else if (props.activePlayers !== null) {
        let stage = props.activePlayers[props.currentPlayer];
        switch(stage) {
            case "draw": 
                message = "Draw a Card";
                break;
            case "play": 
                message = "Play a Card";
                buttons = [<Button key="delete" variant="contained" color="primary" onClick={props.trashRoute} endIcon={<DeleteIcon />}>
                    Trash Route
                        </Button>]
                break;
            case "score": 
                message = "Score a Route";
                buttons = [<Button key="score" variant="contained" color="primary" onClick={props.scoreCards} endIcon={<SendIcon />}>
                            Score
                        </Button>,
                        <Button key="done" variant="contained" color="primary" onClick={props.endTurn} endIcon={<DoneIcon />}>
                            End Turn
                        </Button>]
                break;
            case "place": 
                message = "Place Houses";
                buttons = [<Button key="done" variant="contained" color="primary" onClick={props.endTurn} endIcon={<DoneIcon />}>
                            Done
                        </Button>]
                break;
        }
    }
    // End Game
    if (props.gameover) {
        message = "Winner: Player" + props.gameover.winner;
    }
    return (
        
        <Paper style={hStyle}>
            <Button disableRipple>{message}</Button>
            {buttons}
            {/* <Snackbar open={this.props.open} autoHideDuration={6000}>
                <Alert severity="error">
                    Invalid House Placement
                </Alert>
            </Snackbar> */}
        </Paper>
    );
}

