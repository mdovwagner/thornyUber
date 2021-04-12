import React from 'react';
import CityCard from './Card';
import Grid from '@material-ui/core/Grid';
import { cities } from '../static/cities';

function renderCity(city) {
  const labelStyle = {
    fill: cities[city].color,
    strokeWidth: 2,
    stroke: "black"
  };
  const textStyle = {
    fontFamily: "Gamja Flower"
  };
  const fgStyle = {
    fill: "tan",
    strokeWidth: 2,
    stroke: "black"
  };
  let textWidth = city.length * 8;
  return /*#__PURE__*/React.createElement("svg", {
    width: "90",
    height: "50"
  }, /*#__PURE__*/React.createElement("ellipse", {
    style: fgStyle,
    cx: 42,
    cy: 18,
    rx: "40",
    ry: "15"
  }), /*#__PURE__*/React.createElement("rect", {
    x: 42 - textWidth / 2,
    y: 18 - 15,
    width: textWidth,
    height: "20",
    style: labelStyle
  }, city), /*#__PURE__*/React.createElement("text", {
    x: 42,
    y: 18,
    textAnchor: "middle",
    style: textStyle
  }, city));
}

export default function Tableau(props) {
  return /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "row",
    justify: "center",
    alignItems: "flex-start"
  }, props.tableau.map((city, idx) => /*#__PURE__*/React.createElement(Grid, {
    key: city + idx,
    item: true
  }, /*#__PURE__*/React.createElement(CityCard, {
    title: city,
    onClick: (event, id) => 0,
    onMouseEnter: e => props.highlightCity(city),
    onMouseLeave: e => props.unhighlightCity(city)
  }))));
}