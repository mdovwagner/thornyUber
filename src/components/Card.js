import React from 'react';
import { cities } from '../static/cities'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export default function CityCard(props) {
    const city = cities[props.title];
    const hStyle = { backgroundColor: city.region };
    return (
        <Card style={hStyle} onClick={() => props.onClick(city.id)} className="card" variant="outlined" >
            {/* <CardHeader title={city.id} style={hStyle} className="card-label"/> */}
            <CardContent>
                <Typography variant="h5"  className="card-label" color="textPrimary">{city.id}</Typography>
            </CardContent>
        </Card>
    );
}