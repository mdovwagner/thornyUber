import React from 'react';
import { cities } from '../static/cities'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export default function CityCard(props) {
    if (props.title === null) {
        return(<div />)
    }
    const city = cities[props.title];
    const bgStyle = { fill: "tan", stroke: "black"};
    const labelStyle = { fill: city.region, stroke: "black" };
    const textStyle = { fontFamily: "Gamja Flower" };
    return (
        // <Card style={hStyle} onClick={(event) => props.onClick(event, city.id)} className="card" variant="outlined" >
        //     <CardContent>
        //         {/* <Typography variant="h5"  className="card-label" color="textPrimary">{city.id}</Typography> */}
        //     </CardContent>
        // </Card>
        <div onClick={(event) => props.onClick(event, city.id)} className="card"  >
                <svg width="80" height="120">
                    <defs>
                        <style type="text/css">@import url('https://fonts.googleapis.com/css?family=Indie+Flower|Gamja+Flower|Xanh+Mono');</style>
                    </defs>
                    <rect x="2" y="2" width="76" height="116" style={bgStyle} rx="5" />
                    <rect x="7" y="7" width="66" height="20" style={labelStyle} rx="2" />
                    <text x="40" y="22" textAnchor="middle" style={textStyle}>{city.id}</text>
                    <rect x="7" y="93" width="66" height="20" style={labelStyle} rx="2" />
                    <text x="40" y="108" textAnchor="middle" style={textStyle}>{city.id}</text>
                </svg>
        </div>
    );
}