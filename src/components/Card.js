import React from 'react';
import { cities } from '../static/cities'



export default function Card(props) {
    const city = cities[props.title];
    const hStyle = { backgroundColor: city.region };
    return (
        <div onClick={() => props.onClick(city.id)} className="card">
            <h5 className="card-label" style = {hStyle}>{city.id}</h5>
        </div>
    );
}