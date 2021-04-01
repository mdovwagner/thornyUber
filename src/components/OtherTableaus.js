import React from 'react';
import CityCard from './Card';
import Grid from '@material-ui/core/Grid';
import { List, ListItem, makeStyles, Paper } from '@material-ui/core';
import { playerColors } from '../static/playerColors';
import { yellow } from '@material-ui/core/colors';
import { BorderColor } from '@material-ui/icons';


export default function OtherTableaus(props) {
    return (
        <List>
            {Object.values(props.players).map(player =>
                <ListItem>
                    <Paper variant="outlined" style={{ border: "3px solid", borderColor: playerColors[player.id].houseBackground}}>
                    Player {player.id}'s Tableau
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                        >
                        {player.tableau.map((city, idx) =>
                            <Grid key={city} item>
                                    <CityCard title={city} onClick={(event, id) => 0} scale={0.8}/>
                            </Grid>
                        )}
                    </Grid>
                    </Paper>
                </ListItem>
            )}
        </List>
    );
}