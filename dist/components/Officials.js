import React from 'react';
import CityCard from './Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { ButtonGroup, Button, Checkbox, List, ListItem, ListItemText, Divider, Typography } from '@material-ui/core';
import CityCardBack from './CardBack';
import { officials } from '../static/officials';
export default function Officials(props) {
  return /*#__PURE__*/React.createElement(Paper, {
    class: "section"
  }, /*#__PURE__*/React.createElement(List, {
    dense: true
  }, /*#__PURE__*/React.createElement(ListItem, {
    style: {
      padding: "0px"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    color: "primary",
    checked: props.player.official === officials.POSTMASTER
  }), /*#__PURE__*/React.createElement(ListItemText, {
    primary: "Post Master",
    secondary: "Draw an Extra Tile"
  })), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(ListItem, {
    style: {
      padding: "0px"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    color: "primary",
    checked: props.player.official === officials.POSTALCARRIER
  }), /*#__PURE__*/React.createElement(ListItemText, {
    primary: "Postal Carrier",
    secondary: "Play an Extra Tile"
  })), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(ListItem, {
    style: {
      padding: "0px"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    color: "primary",
    checked: props.player.official === officials.ADMINISTRATOR
  }), /*#__PURE__*/React.createElement(ListItemText, {
    primary: "Administrator",
    secondary: "Clear the Supply"
  })), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(ListItem, {
    style: {
      padding: "0px"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    color: "primary",
    checked: props.player.official === officials.CARTWRIGHT
  }), /*#__PURE__*/React.createElement(ListItemText, {
    primary: "Cartwright",
    secondary: "Gain a Carriage with 2 fewer tiles"
  }))));
}