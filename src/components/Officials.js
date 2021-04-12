import React from 'react';
import CityCard from './Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { ButtonGroup, Button, Checkbox, List, ListItem, ListItemText, Divider, Typography } from '@material-ui/core';
import CityCardBack from './CardBack';
import { officials } from '../static/officials';



export default function Officials(props) {
    return (
      <Paper class="section">
        {/* <Typography>Turn Summary</Typography>
        <p>1) Draw a Tile</p>
        <p>2) Play a Tile</p>
        <p>3) Score played cards</p> */}
            <List dense >
              <ListItem style={{padding: "0px"}}>
                <Checkbox color="primary" checked={props.player.official === officials.POSTMASTER} />
                <ListItemText primary="Post Master" secondary="Draw an Extra Tile"/>
              </ListItem>
              <Divider />
              <ListItem style={{padding: "0px"}}>
                <Checkbox color="primary" checked={props.player.official === officials.POSTALCARRIER} />
                <ListItemText primary="Postal Carrier" secondary="Play an Extra Tile"/>
              </ListItem>
              <Divider />
              <ListItem style={{padding: "0px"}}>
                <Checkbox color="primary" checked={props.player.official === officials.ADMINISTRATOR} />
                <ListItemText primary="Administrator" secondary="Clear the Supply"/>
              </ListItem>
              <Divider />
              <ListItem style={{padding: "0px"}}>
                <Checkbox color="primary" checked={props.player.official === officials.CARTWRIGHT} />
                <ListItemText primary="Cartwright" secondary="Gain a Carriage with 2 fewer tiles"/>
              </ListItem>
          </List>
        </Paper>


    );
}