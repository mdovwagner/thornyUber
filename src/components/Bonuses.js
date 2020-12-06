import React from 'react';
import { bonuses } from '../static/bonuses'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hand from './Hand';
import Tableau from './Tableau';
import './styles/card.css'
import { playerColors } from '../static/playerColors'
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
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
            <List>
                {Object.keys(this.props.bonuses).map((bonus) =>
                    <ListItem>
                            {this.props.bonuses[bonus].map((point) =>
                            <BonusChip bonus={bonus} point={point} />
                            )}
                            <span>{bonus}</span>
                    </ListItem>
                )}
            </List>
        );
    }
}

