import React from 'react';
import CityCard from './Card';
import Grid from '@material-ui/core/Grid';





export default function Supply(props) {
    return (
        <Grid container spacing={3} direction="row"
            justify="flex-start"
            alignItems="flex-start">
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
    );
}