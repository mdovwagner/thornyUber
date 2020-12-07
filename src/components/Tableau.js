import React from 'react';
import CityCard from './Card';
import Grid from '@material-ui/core/Grid';

function onDragEnd(result, tableau) {
    // dropped outside the list
    if (!result.destination) {
        return;
    }

    const [removed] = tableau.splice(result.source.index, 1);
    tableau.splice(result.destination.index, 0, removed);
}
export default function Tableau(props) {


    return (
        <Grid container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
        >
            {props.tableau.map( (city, idx) =>
                <Grid key={city} item>
                    <CityCard title={city} onClick={(event, id) => 0} />
                </Grid>
            )}
        </Grid>
    );
}