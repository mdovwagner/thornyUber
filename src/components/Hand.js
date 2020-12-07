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
            anchorEl: null,
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
                anchorEl: event.target,
            });
        }
    }
    handlePopoverClose() {
        this.setState({
            openedPopoverId: null,
            anchorEl: null,
        });
    }

    render() {
        const { anchorEl, openedPopoverId } = this.state;
        const handleButton = (city, isLeft) => {
            this.handlePopoverClose();
            this.props.onClick(city, isLeft);
        }


        return (
            <Grid container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                {this.props.hand.map( (city) =>
                    <Grid key={city} item>
                        <CityCard title={city} onClick={(event) => this.handlePopoverOpen(event, city)} />
                        <Popover
                            id={city}
                            open={openedPopoverId === city}
                            anchorEl={anchorEl}
                            onClose={this.handlePopoverClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                        >
                            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                                <IconButton onClick={() => handleButton(city, true)}><KeyboardArrowLeftIcon /></IconButton>
                                <IconButton onClick={() => handleButton(city, false)}><KeyboardArrowRightIcon /></IconButton>
                            </ButtonGroup>
                        </Popover>
                    </Grid>
                )}
            </Grid>
        );
    }
}