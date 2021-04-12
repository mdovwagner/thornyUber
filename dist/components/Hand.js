import React from 'react';
import CityCard from './Card';
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { Button, ButtonGroup, IconButton } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
export default class Hand extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
      anchorEl: null
    };
    this.handlePopoverOpen = this.handlePopoverOpen.bind(this);
    this.handlePopoverClose = this.handlePopoverClose.bind(this);
  }

  handlePopoverOpen(event, popoverId) {
    // If no cards in tableau just place on left
    if (this.props.tableau.length === 0) {
      this.props.onClick(popoverId, true);
    } else {
      this.setState({
        openedPopoverId: popoverId,
        anchorEl: event.target
      });
    }
  }

  handlePopoverClose() {
    this.setState({
      openedPopoverId: null,
      anchorEl: null
    });
  }

  render() {
    const {
      anchorEl,
      openedPopoverId
    } = this.state;

    const handleButton = (city, isLeft) => {
      this.handlePopoverClose();
      this.props.onClick(city, isLeft);
    };

    return /*#__PURE__*/React.createElement(Grid, {
      container: true,
      direction: "row",
      justify: "center",
      alignItems: "flex-start"
    }, this.props.hand.map((city, idx) => /*#__PURE__*/React.createElement(Grid, {
      key: city + idx,
      item: true
    }, /*#__PURE__*/React.createElement(CityCard, {
      title: city,
      onClick: event => this.handlePopoverOpen(event, city),
      onMouseEnter: e => console.log("hover"),
      onMouseEnter: e => this.props.highlightCity(city),
      onMouseLeave: e => this.props.unhighlightCity(city)
    }), /*#__PURE__*/React.createElement(Popover, {
      id: city,
      open: openedPopoverId === city,
      anchorEl: anchorEl,
      onClose: this.handlePopoverClose,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'center'
      }
    }, /*#__PURE__*/React.createElement(ButtonGroup, {
      variant: "contained",
      color: "primary",
      "aria-label": "contained primary button group"
    }, /*#__PURE__*/React.createElement(IconButton, {
      onClick: () => handleButton(city, true)
    }, /*#__PURE__*/React.createElement(KeyboardArrowLeftIcon, null)), /*#__PURE__*/React.createElement(IconButton, {
      onClick: () => handleButton(city, false)
    }, /*#__PURE__*/React.createElement(KeyboardArrowRightIcon, null)))))));
  }

}