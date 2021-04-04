import React from 'react';
import CityCard from './Card';
import Grid from '@material-ui/core/Grid';
import { cities } from '../static/cities';


function renderCity(city) {
    const labelStyle = {
        fill: cities[city].color,
        strokeWidth: 2,
        stroke: "black"
    }
    const textStyle = {
        fontFamily: "Gamja Flower"
    }
    const fgStyle = {
        fill: "tan",
        strokeWidth: 2,
        stroke: "black"
    }
    
    let textWidth = city.length*8;

    return (<svg width="90" height="50"
        >
        <ellipse style={fgStyle} cx={42} cy={18} rx="40" ry="15" />
        <rect x={42 - textWidth/2} y={18-15} width={textWidth} height="20" style={labelStyle}>{city}</rect>
        <text x={42} y={18} textAnchor="middle" style={textStyle}>{city}</text>
    </svg>
    );
}

export default function Tableau(props) {


    return (
        <Grid container
            direction="row"
            justify="center"
            alignItems="flex-start"
        >
            {props.tableau.map( (city, idx) =>
                <Grid key={city+idx} item>
                    <CityCard title={city} onClick={(event, id) => 0} 
                            onMouseEnter={e => props.highlightCity(city)} 
                            onMouseLeave={e => props.unhighlightCity(city)} 
                    />
                    {/* {renderCity(city)} */}
                </Grid>
            )}
        </Grid>
    );
}