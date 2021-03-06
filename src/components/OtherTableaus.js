import React from 'react';
import CityCard from './Card';
import Grid from '@material-ui/core/Grid';
import { List, ListItem, makeStyles, Paper } from '@material-ui/core';
import { playerColors } from '../static/playerColors';
import { yellow } from '@material-ui/core/colors';
import { BorderColor } from '@material-ui/icons';
import HomeIcon from '@material-ui/icons/Home';
import BonusChip from './BonusChip';
// import "./styles/thornyubers.css"




export default function OtherTableaus(props) {
    let playerName = (props.playerID in props.matchData) ? props.matchData[props.playerID].name : "Player "+ props.playerID.toString();
    let otherPlayers = Object.values(props.players).filter(player => { return (player.id.toString() !== props.playerID)});
    return (
        <List>
            {Object.values(otherPlayers).map(player =>
                <ListItem key={player.id}>
                    {/* style={{ border: "3px solid", borderColor: playerColors[player.id].houseBackground, backgroundColor: "tan" }} */}
                    <Paper variant="outlined" class="section" style={{ borderColor: playerColors[player.id].houseBackground}}>
                    Player {player.id}'s Tableau
                    <br />
                    <HomeIcon style={{ color: playerColors[player.id].houseBackground, stroke: "black"}}/> x {player.houses}, Carriage: {player.carriageNumber}
                    {/* Bonuses */}
                    {Object.keys(player.bonuses).map((bonus) => 
                        player.bonuses[bonus].map((point) =>
                            <BonusChip key={bonus.toString() + "."+ point.toString()} bonus={bonus} point={point} />
                        )
                    )}
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                        >
                        {player.tableau.map((city, idx) =>
                            <Grid key={city+idx.toString()} item>
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