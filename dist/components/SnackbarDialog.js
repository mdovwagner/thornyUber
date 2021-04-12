function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return /*#__PURE__*/React.createElement(MuiAlert, _extends({
    elevation: 6,
    variant: "filled"
  }, props));
}

export default class SnackbarDialog extends React.Component {
  constructor(...args) {
    super(...args);

    this.handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }

      this.props.endMessage();
    };
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Snackbar, {
      open: this.props.message.valid,
      autoHideDuration: 5000,
      onClose: this.handleClose
    }, /*#__PURE__*/React.createElement(Alert, {
      onClose: this.handleClose,
      severity: this.props.message.type
    }, this.props.message.text)));
  }

}