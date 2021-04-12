import React from 'react';
import { bonuses } from '../static/bonuses'

export default class BonusChip extends React.Component {


    renderDistance(bonus) {
        const style = {stroke: "black"}
        return (
            <svg>
                <path d="M 5 5 L 15 5 M 31 5 L 21 5 Z" style={style} />
                <text x="18" y="9" textAnchor="middle" fontSize="8px">{bonuses[bonus].distance}</text>
            </svg>
        );
    }

    renderGameEnd(bonus) {
        const style = {stroke: "black"}
        return (
            <svg>
                <text x="18" y="9" textAnchor="middle" fontSize="8px">Over</text>
            </svg>
        );
    }

    renderAll(bonus) {
        return (
            <svg>
                <path d="M 2 2 V 10 L 10 2 H 2 Z" style={{ fill: bonuses[bonus].regions[1] }} />
                <path d="M 2 10 V 18 L 18 2 H 10 Z" style={{ fill: bonuses[bonus].regions[2] }} />
                <path d="M 2 18 V 26 L 26 2 H 18 Z" style={{ fill: bonuses[bonus].regions[3] }} />
                <path d="M 2 26 V 34 L 34 2 H 26 Z" style={{ fill: bonuses[bonus].regions[4]}} />
                <path d="M 34 2 V 10 L 10 34 H 2 Z" style={{ fill: bonuses[bonus].regions[5] }} />
                <path d="M 34 10 V 18 L 18 34 H 10 Z" style={{ fill: bonuses[bonus].regions[6] }} />
                <path d="M 34 18 V 26 L 26 34 H 18 Z" style={{ fill: bonuses[bonus].regions[7] }} />
                <path d="M 34 26 V 34 L 34 34 H 26 Z" style={{ fill: bonuses[bonus].regions[8] }} />
            </svg>
        );
    }

    renderRegion(bonus) {
        switch (bonuses[bonus].id) {
            case "Purple":
            case "Grey":
                const style = {fill: bonuses[bonus].regions[0], stroke: "black"}
                return <rect x="2" y="2" width="32" height="32" style={style} />;
            case "Blue":
            case "Green":
            case "Orange":
                const oneStyle = { fill: bonuses[bonus].regions[0], stroke: "black" }
                const twoStyle = { fill: bonuses[bonus].regions[1], stroke: "black" }
                return <svg>
                        <rect x="2" y="2" width="16" height="32" style={oneStyle} />;
                        <rect x="18" y="2" width="16" height="32" style={twoStyle} />;
                    </svg>
            default:
                return <div></div>;
        }
    }

    renderType(bonus) {
        switch (bonuses[bonus].type) {
            case "distance":
                return this.renderDistance(bonus);
            case "gameEnd":
                return this.renderGameEnd(bonus);
            case "region":
                return this.renderRegion(bonus);
            case "all":
                return this.renderAll(bonus);
            default:
                return <div></div>;
        }
    }


    render() {
        const bgStyle = {
            fill: "gold",
            strokeWidth: 1,
            stroke: "black"
        }
        const shieldStyle = {
            fill: "#B99976",
            stroke: "black"
        }
        return (
            <svg width="36" height="36">
                <rect x="2" y="2" width="32" height="32" style={bgStyle} />
                {this.renderType(this.props.bonus)}
                <path d="M 6 9 C 6 24 6 24 18 32 C 30 24 30 24 30 9 L 6 9"
                    style={shieldStyle}
                />
                <text x="18" y="25" textAnchor="middle">{this.props.point}</text>
            </svg>
        );
    }
}

