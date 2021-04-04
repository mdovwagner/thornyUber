import React from 'react';
import CityCard from './Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Card, Typography } from '@material-ui/core';
import CityCardBack from './CardBack';



function renderCity(props,city) {
    return (<CityCard title={city} onClick={props.onClick} onMouseEnter={e => props.highlightCity(city)} onMouseLeave={e => props.unhighlightCity(city)}/>);
}


export default function Supply(props) {
    return (
        <Paper style={{ backgroundColor: "tan" }}>
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
                        {renderCity(props, props.cards[0])}
                    </Grid>
                    <Grid item xs={4}>
                        {renderCity(props, props.cards[1])}
                    </Grid>
                    <Grid item xs={4}>
                        {renderCity(props, props.cards[2])}
                    </Grid>
                    <Grid item xs={4}>
                        {renderCity(props, props.cards[3])}
                    </Grid>
                    <Grid item xs={4}>
                        {renderCity(props, props.cards[4])}
                    </Grid>
                    <Grid item xs={4}>
                        {renderCity(props, props.cards[5])}
                    </Grid>
            </Grid>
        </Paper>
        

    );
}