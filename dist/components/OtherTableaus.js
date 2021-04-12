import React from 'react';
import CityCard from './Card';
import Grid from '@material-ui/core/Grid';
import { List, ListItem, makeStyles, Paper } from '@material-ui/core';
import { playerColors } from '../static/playerColors';
import { yellow } from '@material-ui/core/colors';
import { BorderColor } from '@material-ui/icons';
import HomeIcon from '@material-ui/icons/Home';
import BonusChip from './BonusChip'; // import "./styles/thornyubers.css"

export default function OtherTableaus(props) {
  let playerName = props.playerID in props.matchData ? props.matchData[props.playerID].name : "Player " + props.playerID.toString();
  let otherPlayers = Object.values(props.players).filter(player => {
    return player.id.toString() !== props.playerID;
  });
  return /*#__PURE__*/React.createElement(List, null, Object.values(otherPlayers).map(player => /*#__PURE__*/React.createElement(ListItem, {
    key: player.id
  }, /*#__PURE__*/React.createElement(Paper, {
    variant: "outlined",
    class: "section",
    style: {
      borderColor: playerColors[player.id].houseBackground
    }
  }, "Player ", player.id, "'s Tableau", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(HomeIcon, {
    style: {
      color: playerColors[player.id].houseBackground,
      stroke: "black"
    }
  }), " x ", player.houses, ", Carriage: ", player.carriageNumber, Object.keys(player.bonuses).map(bonus => player.bonuses[bonus].map(point => /*#__PURE__*/React.createElement(BonusChip, {
    key: bonus.toString() + "." + point.toString(),
    bonus: bonus,
    point: point
  }))), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "row",
    justify: "flex-start",
    alignItems: "flex-start"
  }, player.tableau.map((city, idx) => /*#__PURE__*/React.createElement(Grid, {
    key: city + idx.toString(),
    item: true
  }, /*#__PURE__*/React.createElement(CityCard, {
    title: city,
    onClick: (event, id) => 0,
    scale: 0.8
  }))))))));
}