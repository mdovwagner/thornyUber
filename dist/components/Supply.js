import React from 'react';
import CityCard from './Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Card, Typography } from '@material-ui/core';
import CityCardBack from './CardBack';

function renderCity(props, city) {
  return /*#__PURE__*/React.createElement(CityCard, {
    title: city,
    onClick: props.onClick,
    onMouseEnter: e => props.highlightCity(city),
    onMouseLeave: e => props.unhighlightCity(city)
  });
}

export default function Supply(props) {
  const myStage = props.myTurn && (props.stage === "draw" || props.stage === "play" && props.official === null);
  const oStyle = {
    opacity: myStage ? "100%" : "70%",
    borderColor: myStage ? "black" : "#987554"
  };
  return /*#__PURE__*/React.createElement(Paper, {
    class: "section",
    style: oStyle
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "row",
    justify: "space-evenly",
    alignItems: "flex-start"
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(Typography, null, "Deck (", props.deck.length, ")"), /*#__PURE__*/React.createElement(CityCardBack, {
    title: props.deck.length > 0 ? props.deck[0] : null,
    onClick: event => props.onClick(event, null)
  })), /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(Typography, null, "Discard (", props.discard.length, ")"), /*#__PURE__*/React.createElement(CityCard, {
    title: props.discard.length > 0 ? props.discard[0] : null
  }))), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "row",
    justify: "space-evenly",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 4
  }, renderCity(props, props.cards[0])), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 4
  }, renderCity(props, props.cards[1])), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 4
  }, renderCity(props, props.cards[2])), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 4
  }, renderCity(props, props.cards[3])), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 4
  }, renderCity(props, props.cards[4])), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 4
  }, renderCity(props, props.cards[5]))));
}