import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default class SnackbarDialog extends React.Component {

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.props.endMessage();
    };

    render() {
        return (
            <div>
                <Snackbar open={this.props.message.valid} autoHideDuration={5000} onClose={this.handleClose}>
                    <Alert onClose={this.handleClose} severity={this.props.message.type}>
                        {this.props.message.text}
                    </Alert>
                </Snackbar>
            </div>
        );
    }

}