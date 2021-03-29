import React from 'react';
import CityCard from './Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Card, Typography } from '@material-ui/core';
import CityCardBack from './CardBack';





export default function Supply(props) {
    return (
        <Paper>
            <Grid container direction="row"
                justify="space-evenly"
                alignItems="flex-start">
                <Grid item>
                    <Typography>Deck ({props.deck.length})</Typography>
                    <CityCardBack title={(props.deck.length > 0) ? props.deck[0] : null} onClick={(event) => props.onClick(event, null)} />
                </Grid>
                <Grid item>
                    <Typography>Discard ({props.discard.length})</Typography>
                    <CityCard title={(props.discard.length > 0) ? props.discard[0] : null}/>
                </Grid>
            </Grid>
            <Grid container direction="row"
                justify="space-evenly"
                alignItems="center">
                    <Grid item xs={4}>
                        <CityCard title={props.cards[0]} onClick={props.onClick}/>
                    </Grid>
                    <Grid item xs={4}>
                        <CityCard title={props.cards[1]} onClick={props.onClick}/>
                    </Grid>
                    <Grid item xs={4}>
                        <CityCard title={props.cards[2]} onClick={props.onClick}/>
                    </Grid>
                    <Grid item xs={4}>
                        <CityCard title={props.cards[3]} onClick={props.onClick}/>
                    </Grid>
                    <Grid item xs={4}>
                        <CityCard title={props.cards[4]} onClick={props.onClick}/>
                    </Grid>
                    <Grid item xs={4}>
                        <CityCard title={props.cards[5]} onClick={props.onClick}/>
                    </Grid>
            </Grid>
        </Paper>
        

    );
}