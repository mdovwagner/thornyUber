import React from 'react';
import { bonuses } from '../static/bonuses'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hand from './Hand';
import Tableau from './Tableau';
import './styles/card.css'
import { playerColors } from '../static/playerColors'
import { Card, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@material-ui/core';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import BonusChip from './BonusChip';

export default class Bonuses extends React.Component {


    render() {
        const bgStyle = {
            fill: "cyan",
            strokeWidth: 1,
            stroke: "black"
        }
        const shieldStyle = {
            fill: "tan",
            stroke: "black"
        }
        return (
            <Card style={{ backgroundColor: "tan" }}>
                <Typography>Bonuses</Typography>
                {Object.keys(this.props.bonuses).map((bonus) =>
                    <BonusChip key={bonus} bonus={bonus} point={this.props.bonuses[bonus][0]} />
                )}
            </Card>
        );
    }
}

