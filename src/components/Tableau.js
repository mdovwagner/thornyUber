import React from 'react';
import Card from './Card';


export default function Tableau(props) {

    return (
        <div className="card-container">
            {props.tableau.map(city =>
                <Card title={city} onClick={props.onClick} />
            )}
        </div>
    );
}