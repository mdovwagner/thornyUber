import React from 'react';
import { cities } from '../static/cities';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
export default class CityCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(e) {
    var exampleFn = this.props.onMouseEnter || null;

    if (exampleFn) {
      exampleFn(e);
    }
  }

  handleMouseLeave(e) {
    var exampleFn = this.props.onMouseLeave || null;

    if (exampleFn) {
      exampleFn(e);
    }
  }

  render() {
    if (this.props.title === null) {
      return /*#__PURE__*/React.createElement("div", null);
    }

    const city = cities[this.props.title];
    const bgStyle = {
      fill: "#B99976",
      stroke: "black"
    };
    const labelStyle = {
      fill: city.color,
      stroke: "black"
    };
    const textStyle = {
      fontFamily: "Gamja Flower",
      fontSize: "14"
    };
    let scale = this.props.scale || 1;
    return /*#__PURE__*/React.createElement("div", {
      onClick: event => this.props.onClick(event, city.id),
      className: "card",
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave
    }, /*#__PURE__*/React.createElement("svg", {
      width: 75 * scale,
      height: 65 * scale
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("style", {
      type: "text/css"
    }, "@import url('https://fonts.googleapis.com/css?family=Indie+Flower|Gamja+Flower|Xanh+Mono');")), /*#__PURE__*/React.createElement("g", {
      transform: "scale(" + scale + ")"
    }, /*#__PURE__*/React.createElement("rect", {
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
      style: textStyle
    }, city.id))));
  }

}