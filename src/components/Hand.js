import { GridList } from '@material-ui/core';
import React from 'react';
import CityCard from './Card';
import Grid from '@material-ui/core/Grid';

export default function Hand(props) {

    return (
        <Grid container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
        >

            {props.hand.map( city =>
                <Grid item>
                    <CityCard title={city} onClick={props.onClick} />
                </Grid>
            )}
        </Grid>
    );
}