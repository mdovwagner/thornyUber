import React from 'react';
import Card from './Card';


export default function Hand(props) {

    return (
        <div className="card-container">
            {props.hand.map( city =>
                <Card title={city} onClick={props.onClick} />
            )}
        </div>
    );
}