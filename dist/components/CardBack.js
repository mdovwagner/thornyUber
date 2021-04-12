import React from 'react';
import { cities } from '../static/cities';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
export default function CityCardBack(props) {
  const city = cities[props.title];
  const bgStyle = {
    fill: "#664229",
    stroke: "black"
  };
  const labelStyle = {
    fill: "tan",
    stroke: "black"
  };
  const textStyle = {
    fontFamily: "Gamja Flower",
    fontSize: "16"
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: event => props.onClick(event, props.title !== null ? city.id : null),
    className: "card"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "75",
    height: "65"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("style", {
    type: "text/css"
  }, "@import url('https://fonts.googleapis.com/css?family=Indie+Flower|Gamja+Flower|Xanh+Mono');")), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "71",
    height: "61",
    style: bgStyle,
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "7",
    y: "21.5",
    width: "61",
    height: "22",
    style: labelStyle,
    rx: "2"
  }), /*#__PURE__*/React.createElement("text", {
    x: "37.5",
    y: "37.5",
    textAnchor: "middle",
    fontWeight: "bold",
    style: textStyle
  }, "City Tile")));
}