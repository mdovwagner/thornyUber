import React from 'react';
import Card from './Card';


export default function Hand(props) {

    return (
        <div>
            {props.hand.map( city =>
                <Card title={city} onClick={props.onClick} />
            )}
        </div>
    );
}