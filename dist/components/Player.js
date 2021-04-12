import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SendIcon from '@material-ui/icons/Send';
import DoneIcon from '@material-ui/icons/Done';
import HomeIcon from '@material-ui/icons/Home';
import Hand from './Hand';
import Tableau from './Tableau';
import { bonuses } from '../static/bonuses';
import { carriages } from '../static/carriages';
import { playerColors } from '../static/playerColors';
import BonusChip from './BonusChip';
import { Paper } from '@material-ui/core';
export class Player extends React.Component {
  renderHouses(id) {
    const houseColor = playerColors[id].houseBackground; // let move = "translate(" + (city.x + dx[i]) + " " + (city.y + dy[i]) + ") scale(0.05)"

    const houseStyle = {
      fill: houseColor,
      strokeWidth: 10,
      stroke: "black"
    };
    return /*#__PURE__*/React.createElement("svg", {
      transform: "translate(-45 -35) scale(0.5)",
      style: houseStyle
    }, /*#__PURE__*/React.createElement("path", {
      d: "m437.15 499.44zl-162.81-144.19-162.91 144.25v206.12c0 5.3234 4.3016 9.5938 9.625 9.5938h101.81v-90.375c0-5.3234 4.2704-9.625 9.5938-9.625h83.656c5.3234 0 9.5938 4.3016 9.5938 9.625v90.375h101.84c5.3234 0 9.5938-4.2704 9.5938-9.5938v-206.19zm-325.72 0.0625z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m273.39 276.34-231.05 204.58 24.338 27.457 207.66-183.88 207.61 183.88 24.291-27.457-231-204.58-0.89792 1.0397-0.94518-1.0397z"
    }));
  }

  renderCarriage(num) {
    if (num === 2) {
      return /*#__PURE__*/React.createElement("div", null);
    }

    const bgStyle = {
      fill: "gold",
      strokeWidth: 1,
      stroke: "black"
    };
    const shieldStyle = {
      fill: "tan",
      stroke: "black"
    };
    const wheelStyle = {
      fill: "gold",
      stroke: "black"
    };
    let dxs = [15, 35, 55, 75, 95, 15, 35].slice(0, num);
    let dys = [15, 15, 15, 15, 15, 35, 35].slice(0, num);
    return /*#__PURE__*/React.createElement("svg", {
      width: "110",
      height: "60"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "2",
      width: "106",
      height: "56",
      style: bgStyle
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 6 9 C 6 24 6 24 18 32 C 30 24 30 24 30 9 L 6 9",
      style: shieldStyle,
      transform: "translate(70 20)"
    }), /*#__PURE__*/React.createElement("text", {
      x: "18",
      y: "25",
      textAnchor: "middle",
      transform: "translate(70 20)"
    }, carriages[num].points), /*#__PURE__*/React.createElement("text", {
      x: "5",
      y: "50",
      textAnchor: "left"
    }, "Carriage"), dxs.map((x, i) => /*#__PURE__*/React.createElement("svg", {
      key: x
    }, /*#__PURE__*/React.createElement("circle", {
      cx: x,
      cy: dys[i],
      r: "8",
      style: wheelStyle
    }), /*#__PURE__*/React.createElement("line", {
      x1: x - 10,
      y1: dys[i],
      x2: x + 10,
      y2: dys[i],
      stroke: "black"
    }), /*#__PURE__*/React.createElement("line", {
      x1: x,
      y1: dys[i] - 10,
      x2: x,
      y2: dys[i] + 10,
      stroke: "black"
    }), /*#__PURE__*/React.createElement("line", {
      x1: x - 7,
      y1: dys[i] - 7,
      x2: x + 7,
      y2: dys[i] + 7,
      stroke: "black"
    }), /*#__PURE__*/React.createElement("line", {
      x1: x - 7,
      y1: dys[i] + 7,
      x2: x + 7,
      y2: dys[i] - 7,
      stroke: "black"
    }))));
  }

  render() {
    let player = this.props.player;
    const myStage = this.props.myTurn && (this.props.stage === "play" || this.props.stage === "score" && this.props.official === null);
    const oStyle = {
      opacity: myStage ? "100%" : "70%",
      borderColor: myStage ? "black" : "#987554"
    };
    const tStyle = {
      opacity: this.props.myTurn ? "100%" : "70%"
    };
    const houses = Array(player.houses).fill(null);
    const bonusesStr = Object.keys(player.bonuses).map(bonus => "Bonus: " + bonuses[bonus].id + " " + bonuses[bonus].points.reduce((x, y) => x + y) + ", ");
    return /*#__PURE__*/React.createElement(Grid, {
      container: true,
      spacing: 3,
      direction: "row",
      justify: "flex-start",
      alignItems: "flex-start"
    }, /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 4
    }, /*#__PURE__*/React.createElement(Paper, {
      class: "section",
      style: oStyle
    }, "Hand", /*#__PURE__*/React.createElement(Hand, {
      hand: player.hand,
      onClick: this.props.playCard,
      tableau: player.tableau,
      highlightCity: this.props.highlightCity,
      unhighlightCity: this.props.unhighlightCity
    }))), /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 8
    }, /*#__PURE__*/React.createElement(Paper, {
      class: "section",
      style: tStyle
    }, "Tableau", /*#__PURE__*/React.createElement(Tableau, {
      tableau: player.tableau,
      highlightCity: this.props.highlightCity,
      unhighlightCity: this.props.unhighlightCity
    }), /*#__PURE__*/React.createElement(Grid, {
      container: true,
      direction: "row",
      justify: "flex-start",
      alignItems: "flex-start"
    }, /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 3,
      container: true,
      direction: "row",
      justify: "flex-start",
      alignItems: "flex-start"
    }, houses.map((house, idx) => /*#__PURE__*/React.createElement(Grid, {
      key: idx.toString(),
      item: true
    }, /*#__PURE__*/React.createElement(HomeIcon, {
      style: {
        color: playerColors[player.id].houseBackground,
        stroke: "black"
      }
    })))), /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 9
    }, this.renderCarriage(player.carriageNumber), Object.keys(player.bonuses).map(bonus => player.bonuses[bonus].map(point => /*#__PURE__*/React.createElement(BonusChip, {
      key: bonus.toString() + "." + point.toString(),
      bonus: bonus,
      point: point
    }))))))));
  }

}