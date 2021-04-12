import React from 'react';
import { bonuses } from '../static/bonuses';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hand from './Hand';
import Tableau from './Tableau';
import { playerColors } from '../static/playerColors';
import { List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import SyncIcon from '@material-ui/icons/Sync';
export default function ActionBar(props) {
  let message = "Draw a Card";
  let buttons = [];
  const hStyle = {
    // position: "fixed",
    backgroundColor: props.myTurn ? "gold" : "tan",
    opacity: "100%",
    bottom: 0
  };

  if (props.playerID !== props.currentPlayer) {
    message = "Wait for your turn...";
    buttons = [/*#__PURE__*/React.createElement(Button, {
      key: "timer",
      variant: "contained",
      color: "primary",
      onClick: props.alertPlayer,
      endIcon: /*#__PURE__*/React.createElement(HourglassEmptyIcon, null)
    }, "David Green taking too long...")];
  } else if (props.activePlayers !== null) {
    let stage = props.activePlayers[props.currentPlayer];

    switch (stage) {
      case "draw":
        message = "Draw a Card or ";
        buttons = [/*#__PURE__*/React.createElement(Button, {
          key: "admin",
          variant: "contained",
          color: "primary",
          onClick: props.administrator,
          endIcon: /*#__PURE__*/React.createElement(SyncIcon, null)
        }, "Administrator")];
        break;

      case "play":
        message = "Play a Card";
        buttons = [/*#__PURE__*/React.createElement(Button, {
          key: "delete",
          variant: "contained",
          color: "primary",
          onClick: props.trashRoute,
          endIcon: /*#__PURE__*/React.createElement(DeleteIcon, null)
        }, "Trash Route")];
        break;

      case "score":
        message = "Score a Route";
        buttons = [/*#__PURE__*/React.createElement(Button, {
          key: "score",
          variant: "contained",
          color: "primary",
          onClick: props.scoreCards,
          endIcon: /*#__PURE__*/React.createElement(SendIcon, null)
        }, "Score"), /*#__PURE__*/React.createElement(Button, {
          key: "done",
          variant: "contained",
          color: "primary",
          onClick: props.endTurn,
          endIcon: /*#__PURE__*/React.createElement(DoneIcon, null)
        }, "End Turn")];
        break;

      case "place":
        message = "Place Houses";
        buttons = [/*#__PURE__*/React.createElement(Button, {
          key: "done",
          variant: "contained",
          color: "primary",
          onClick: props.endTurn,
          endIcon: /*#__PURE__*/React.createElement(DoneIcon, null)
        }, "Done")];
        break;
    }
  } // End Game


  if (props.gameover) {
    message = "Winner: Player" + props.gameover.winner;
  }

  return /*#__PURE__*/React.createElement(Paper, {
    class: "section",
    style: hStyle
  }, /*#__PURE__*/React.createElement(Button, {
    disableRipple: true
  }, message), buttons);
}