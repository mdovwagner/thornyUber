import React from 'react';
import CityCard from './Card';
import Grid from '@material-ui/core/Grid';


export default function Tableau(props) {

    return (
        <Grid container
            direction = "row"
            justify = "flex-start"
            alignItems = "flex-start"
        >
            {props.tableau.map(city =>
                <Grid item>
                    <CityCard title={city} onClick={props.onClick} />
                </Grid>
            )}
        </Grid>
    );
}