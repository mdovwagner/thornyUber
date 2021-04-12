import { Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Graph } from "react-d3-graph";
import { cities } from '../static/cities';
import { edgeLookup, edges } from '../static/edges';
import { playerColors } from '../static/playerColors';
const data = {
  nodes: Object.values(cities),
  links: edges
};
export class ThornyUbersBoard extends React.Component {
  constructor(props) {
    super(props); // create a ref to store the textInput DOM element

    this.cityRefs = {};

    for (let city in cities) {
      this.cityRefs[city] = /*#__PURE__*/React.createRef();
    }

    this.edgeRefs = {};

    for (let edge in edges) {
      this.edgeRefs[edges[edge].source + "." + edges[edge].target] = /*#__PURE__*/React.createRef();
    }
  }

  renderEdge(edge, i) {
    const edgeStyle = {
      strokeWidth: 2,
      stroke: "black"
    };
    let x1 = cities[edge.source].x;
    let y1 = cities[edge.source].y;
    let x2 = cities[edge.target].x;
    let y2 = cities[edge.target].y;
    return /*#__PURE__*/React.createElement("line", {
      key: "edge" + i,
      x1: x1,
      y1: y1,
      x2: x2,
      y2: y2,
      style: edgeStyle,
      ref: this.edgeRefs[edge.source + "." + edge.target]
    });
  }

  highlightCity(city) {
    Object.values(this.cityRefs).forEach(ref => {
      ref.current.style.opacity = "50%";
      ref.current.style.stroke = 2;
    });
    this.props.selectedCities.forEach(sel => {
      this.cityRefs[sel].current.style.opacity = "100%";
    });
    Object.values(this.edgeRefs).forEach(ref => {
      ref.current.style.opacity = "0%";
    });
    this.cityRefs[city].current.style.opacity = "100%";
    this.cityRefs[city].current.style.strokeWidth = 4;
    Object.keys(edgeLookup[city]).forEach(neighbor => {
      this.cityRefs[neighbor].current.style.opacity = "100%";
    });
    let neighborEdges1 = Object.keys(edgeLookup[city]).map(neighbor => neighbor + "." + city);
    let neighborEdges2 = Object.keys(edgeLookup[city]).map(neighbor => city + "." + neighbor);
    let neighborEdges = neighborEdges1.concat(neighborEdges2).filter(edge => edge in this.edgeRefs);
    neighborEdges.forEach(edge => {
      this.edgeRefs[edge].current.style.opacity = "100%";
    });
  }

  unhighlightCity(city) {
    Object.values(this.cityRefs).forEach(ref => {
      ref.current.style.opacity = "100%";
      ref.current.style.strokeWidth = 2;
    });
    Object.values(this.edgeRefs).forEach(ref => {
      ref.current.style.opacity = "100%";
    });
  }

  renderHouse(city, i, citySelected) {
    let dx = [-45, -5, -25, +15];
    let dy = [-35, -40, -40, -35];
    let move = "translate(" + (city.x + dx[i]) + " " + (city.y + dy[i]) + ") scale(0.05)";
    const houseExists = this.props.cityStatus[city.id][i];
    const houseColor = (playerColors[i] || {}).houseBackground;
    const houseStyle = {
      fill: houseColor,
      strokeWidth: 10,
      stroke: "black",
      visibility: houseExists ? "visible" : "hidden"
    };
    return /*#__PURE__*/React.createElement("g", {
      transform: move,
      style: houseStyle
    }, /*#__PURE__*/React.createElement("path", {
      d: "m437.15 499.44zl-162.81-144.19-162.91 144.25v206.12c0 5.3234 4.3016 9.5938 9.625 9.5938h101.81v-90.375c0-5.3234 4.2704-9.625 9.5938-9.625h83.656c5.3234 0 9.5938 4.3016 9.5938 9.625v90.375h101.84c5.3234 0 9.5938-4.2704 9.5938-9.5938v-206.19zm-325.72 0.0625z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m273.39 276.34-231.05 204.58 24.338 27.457 207.66-183.88 207.61 183.88 24.291-27.457-231-204.58-0.89792 1.0397-0.94518-1.0397z"
    }));
  }

  renderCity(city, i) {
    const labelStyle = {
      fill: city.color
    };
    const textStyle = {
      fontFamily: "Gamja Flower",
      strokeWidth: 0
    };
    const fgStyle = {
      fill: "#B99976"
    };
    const citySelected = this.props.selectedCities.includes(city.id);

    if (citySelected) {
      labelStyle['stroke'] = 'orangered';
      fgStyle['stroke'] = 'orangered';
    }

    let textWidth = city.id.length * 8;
    return /*#__PURE__*/React.createElement("svg", {
      key: "city" + i,
      onClick: event => {
        this.props.selectCity(city.id);
      },
      onMouseEnter: e => this.props.highlightCity(city.id),
      onMouseLeave: e => this.unhighlightCity(city.id),
      className: "node",
      ref: this.cityRefs[city.id],
      style: {
        strokeWidth: 2,
        stroke: "black"
      }
    }, /*#__PURE__*/React.createElement("ellipse", {
      style: fgStyle,
      cx: city.x,
      cy: city.y,
      rx: "40",
      ry: "15"
    }), /*#__PURE__*/React.createElement("rect", {
      x: city.x - textWidth / 2,
      y: city.y + 10,
      width: textWidth,
      height: "20",
      style: labelStyle
    }, city.id), /*#__PURE__*/React.createElement("text", {
      x: city.x,
      y: city.y + 25,
      textAnchor: "middle",
      style: textStyle
    }, city.id), this.renderHouse(city, 0, citySelected), this.renderHouse(city, 1, citySelected), this.renderHouse(city, 2, citySelected), this.renderHouse(city, 3, citySelected)) // <City
    //     selectedCities={this.props.selectedCities}
    //     cityStatus={this.props.cityStatus}
    //     city={city}
    // />
    ;
  }

  renderBackground() {
    const bgStyle = {
      fill: "magenta"
    };
    return /*#__PURE__*/React.createElement("svg", null);
  }

  render() {
    let scale = 1;
    const myStage = this.props.myTurn && (this.props.stage === "score" || this.props.stage === "place");
    const oStyle = {
      opacity: this.props.myTurn ? "100%" : "70%",
      borderColor: myStage ? "black" : "#987554"
    };
    return /*#__PURE__*/React.createElement(Paper, {
      class: "section",
      style: oStyle
    }, /*#__PURE__*/React.createElement("svg", {
      width: 650 * scale,
      height: 450 * scale,
      viewBox: "0 0 650 470"
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("style", {
      type: "text/css"
    }, "@import url('https://fonts.googleapis.com/css?family=Indie+Flower|Gamja+Flower|Xanh+Mono');")), this.renderBackground(), Object.values(edges).map((edge, i) => this.renderEdge(edge, i)), Object.values(cities).map((city, i) => this.renderCity(city, i))));
  }

}