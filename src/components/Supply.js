import React from 'react';
import CityCard from './Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Card } from '@material-ui/core';
import CityCardBack from './CardBack';





export default function Supply(props) {
    return (
        <div>
            <Grid container direction="row"
                justify="space-evenly"
                alignItems="flex-start">
                <Grid item><Paper variant="outlined" >
                    <h3>Deck</h3>
                    <CityCardBack title={props.deck[0]} onClick={(event) => props.onClick(event, null)} />
                </Paper></Grid>
                <Grid item><Paper variant="outlined" >
                    <h3>Discard</h3>
                    <CityCard title={(props.discard.length > 0) ? props.discard[0] : null} onClick={(event) => props.onClick(event, null)} />
                </Paper></Grid>
            </Grid>
            <Grid container spacing={3} direction="row"
                justify="space-evenly"
                alignItems="space-evenly">
                    <Grid item xs={6}>
                        <CityCard title={props.cards[0]} onClick={props.onClick}/>
                    </Grid>
                    <Grid item xs={6}>
                        <CityCard title={props.cards[1]} onClick={props.onClick}/>
                    </Grid>
                    <Grid item xs={6}>
                        <CityCard title={props.cards[2]} onClick={props.onClick}/>
                    </Grid>
                    <Grid item xs={6}>
                        <CityCard title={props.cards[3]} onClick={props.onClick}/>
                    </Grid>
                    <Grid item xs={6}>
                        <CityCard title={props.cards[4]} onClick={props.onClick}/>
                    </Grid>
                    <Grid item xs={6}>
                        <CityCard title={props.cards[5]} onClick={props.onClick}/>
                    </Grid>
            </Grid>
        </div>
        

    );
}