import React from 'react';
import Card from './Card';





export default function Supply(props) {
    return (
        <table>
            <tbody>
            <tr>
                <td><Card title={props.cards[0]} onClick={props.onClick}/></td>
                <td><Card title={props.cards[1]} onClick={props.onClick}/></td>
            </tr>
            <tr>
                <td><Card title={props.cards[2]} onClick={props.onClick}/></td>
                <td><Card title={props.cards[3]} onClick={props.onClick}/></td>
            </tr>
            <tr>
                <td><Card title={props.cards[4]} onClick={props.onClick}/></td>
                <td><Card title={props.cards[5]} onClick={props.onClick}/></td>
            </tr>
            </tbody>
        </table>
    );
}