import { Paper, Typography } from '@material-ui/core';
import React from 'react';

import { Graph } from "react-d3-graph";
import { cities } from '../static/cities';
import { edgeLookup, edges } from '../static/edges';
import { playerColors } from '../static/playerColors';

const data = {
    nodes: Object.values(cities),
    links: edges
}


function City(args) {
    const bgStyle = {
        fill: args.city.region,
        strokeWidth: 5,
        stroke: "black"
    }
    const fgStyle = {
        fill: "tan",
        strokeWidth: 10,
        stroke: "black"
    }
    const citySelected = args.selectedCities.includes(args.city.id);
    if (citySelected) {
        fgStyle['outline'] = '5px solid orangered'
    }
    const labelStyle = {
        fill: args.city.region,
        strokeWidth: 10,
        stroke: "black"
    }

    const houseStyle = {
        fill: "red",
        strokeWidth: 10,
        stroke: "black",
        display: "default"
    }
    var houseStyles = []
    for (let i = 0; i < 4; i++) {
        const houseExists = args.cityStatus[args.city.id][i]
        const houseColor = (playerColors[i] || {}).houseBackground
        houseStyles.push({
            fill: houseColor,
            strokeWidth: 10,
            stroke: "black",
            display: (houseExists) ? 'default' : 'none'
        })
    }

    return (
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <rect x="34.375" y="92.391" width="79.358" height="135.508" style={bgStyle} />
            <rect x="113.733" width="72.218" height="253.078" style={bgStyle} />
            <rect x="185.951" y="40.895" width="73.434" height="159.105" style={bgStyle} />
            <rect x="259.385" y="74.84" width="69.66" height="178.238" style={bgStyle} />
            <rect x="329.045" y="20.526" width="69.66" height="279.474" style={bgStyle} />
            <rect x="398.705" y="74.84" width="69.66" height="214.742" style={bgStyle} />
            <ellipse style={fgStyle} cx="250" cy="274.186" rx="250" ry="120" />
            <g transform="matrix(0.300168, 0, 0, 0.300168, 354.766479, 143.186356)" style={houseStyles[0]}>
                <g transform="translate(-42.339 -276.34)">
                    <path d="m437.15 499.44zl-162.81-144.19-162.91 144.25v206.12c0 5.3234 4.3016 9.5938 9.625 9.5938h101.81v-90.375c0-5.3234 4.2704-9.625 9.5938-9.625h83.656c5.3234 0 9.5938 4.3016 9.5938 9.625v90.375h101.84c5.3234 0 9.5938-4.2704 9.5938-9.5938v-206.19zm-325.72 0.0625z" />
                    <path d="m273.39 276.34-231.05 204.58 24.338 27.457 207.66-183.88 207.61 183.88 24.291-27.457-231-204.58-0.89792 1.0397-0.94518-1.0397z" />
                </g>
            </g>
            <g transform="matrix(0.300168, 0, 0, 0.300168, -0.000304, 143.186371)" style={houseStyles[1]}>
                <g transform="translate(-42.339 -276.34)">
                    <path d="m437.15 499.44zl-162.81-144.19-162.91 144.25v206.12c0 5.3234 4.3016 9.5938 9.625 9.5938h101.81v-90.375c0-5.3234 4.2704-9.625 9.5938-9.625h83.656c5.3234 0 9.5938 4.3016 9.5938 9.625v90.375h101.84c5.3234 0 9.5938-4.2704 9.5938-9.5938v-206.19zm-325.72 0.0625z" />
                    <path d="m273.39 276.34-231.05 204.58 24.338 27.457 207.66-183.88 207.61 183.88 24.291-27.457-231-204.58-0.89792 1.0397-0.94518-1.0397z" />
                </g>
            </g>
            <g transform="matrix(0.300168, 0, 0, 0.300168, 185.950699, 74.840004)" style={houseStyles[2]}>
                <g transform="translate(-42.339 -276.34)">
                    <path d="m437.15 499.44zl-162.81-144.19-162.91 144.25v206.12c0 5.3234 4.3016 9.5938 9.625 9.5938h101.81v-90.375c0-5.3234 4.2704-9.625 9.5938-9.625h83.656c5.3234 0 9.5938 4.3016 9.5938 9.625v90.375h101.84c5.3234 0 9.5938-4.2704 9.5938-9.5938v-206.19zm-325.72 0.0625z" />
                    <path d="m273.39 276.34-231.05 204.58 24.338 27.457 207.66-183.88 207.61 183.88 24.291-27.457-231-204.58-0.89792 1.0397-0.94518-1.0397z" />
                </g>
            </g>
            <g transform="matrix(0.300168, 0, 0, 0.300168, 185.950699, 268.26416)" style={houseStyles[3]}>
                <g transform="translate(-42.339 -276.34)">
                    <path d="m437.15 499.44zl-162.81-144.19-162.91 144.25v206.12c0 5.3234 4.3016 9.5938 9.625 9.5938h101.81v-90.375c0-5.3234 4.2704-9.625 9.5938-9.625h83.656c5.3234 0 9.5938 4.3016 9.5938 9.625v90.375h101.84c5.3234 0 9.5938-4.2704 9.5938-9.5938v-206.19zm-325.72 0.0625z" />
                    <path d="m273.39 276.34-231.05 204.58 24.338 27.457 207.66-183.88 207.61 183.88 24.291-27.457-231-204.58-0.89792 1.0397-0.94518-1.0397z" />
                </g>
            </g>
            <rect x="0" y="370" width="500" height="130" style={labelStyle} />;
        </svg>
    );
}



export class ThornyUbersBoard extends React.Component {

    renderEdge(edge) {
        const edgeStyle = {
            strokeWidth: 2,
            stroke: "black"
        }
        let x1 = cities[edge.source].x;
        let y1 = cities[edge.source].y;
        let x2 = cities[edge.target].x;
        let y2 = cities[edge.target].y;
        return (<line x1={x1} y1={y1} x2={x2} y2={y2} style={edgeStyle} />

        );
    }

    highlightCity(e) {
        // e.target.style.fill="red";
        console.log(edgeLookup[e.target.innerHTML])
    }

    renderHouse(city, i) {
        let dx = [-45, -5, -25, +15];
        let dy = [-35, -40, -40, -35];
        let move = "translate(" + (city.x + dx[i]) + " " + (city.y + dy[i]) + ") scale(0.05)"
        const houseExists = this.props.cityStatus[city.id][i]
        const houseColor = (playerColors[i] || {}).houseBackground
        const houseStyle = {
            fill: houseColor,
            strokeWidth: 10,
            stroke: "black",
            display: (houseExists) ? "default" : "none"
        }
        return (
            <g transform={move} style={houseStyle}>
                <path d="m437.15 499.44zl-162.81-144.19-162.91 144.25v206.12c0 5.3234 4.3016 9.5938 9.625 9.5938h101.81v-90.375c0-5.3234 4.2704-9.625 9.5938-9.625h83.656c5.3234 0 9.5938 4.3016 9.5938 9.625v90.375h101.84c5.3234 0 9.5938-4.2704 9.5938-9.5938v-206.19zm-325.72 0.0625z" />
                <path d="m273.39 276.34-231.05 204.58 24.338 27.457 207.66-183.88 207.61 183.88 24.291-27.457-231-204.58-0.89792 1.0397-0.94518-1.0397z" />
            </g>
        );
    }

    renderCity(city) {
        const labelStyle = {
            fill: city.region,
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
        const citySelected = this.props.selectedCities.includes(city.id);
        if (citySelected) {
            labelStyle['stroke'] = 'orangered'
            fgStyle['stroke'] = 'orangered'
        }
        
        let textWidth = city.id.length*8;

        return (<svg onClick={(event) => {this.props.selectCity(city.id)}}
            onMouseOver={this.highlightCity}
            className="node"
            >
            <ellipse style={fgStyle} cx={city.x} cy={city.y} rx="40" ry="15" />
            <rect x={city.x - textWidth/2} y={city.y + 10} width={textWidth} height="20" style={labelStyle}>{city.id}</rect>
            <text x={city.x} y={city.y+25} textAnchor="middle" style={textStyle}>{city.id}</text>
                {this.renderHouse(city,0)}
                {this.renderHouse(city,1)}
                {this.renderHouse(city,2)}
                {this.renderHouse(city,3)}
        </svg>
                    // <City
                    //     selectedCities={this.props.selectedCities}
                    //     cityStatus={this.props.cityStatus}
                    //     city={city}
                    // />
        );
    }

    render() {
        // return (<Graph
        //     id="map" // id is mandatory, if no id is defined rd3g will throw an error
        //     data={data}
        //     config={this.myConfig}
        //     onClickNode={node => { if (node) { this.props.selectCity(node) } }}
        //     // onRightClickNode={onRightClickNode}
        //     // onClickGraph={onClickGraph}
        //     onClickLink={onClickLink}
        //     // onRightClickLink={onRightClickLink}
        // />);
        return (<Paper>
            <Typography>Board</Typography>
            <svg width="1000" height="500" transform="scale(1)">
                <defs>
                    <style type="text/css">@import url('https://fonts.googleapis.com/css?family=Indie+Flower|Gamja+Flower|Xanh+Mono');</style>
                </defs>
            {/* Edges */}
                {Object.values(edges).map(edge =>
                    this.renderEdge(edge)
                )}
            {/* Nodes */}
                {Object.values(cities).map(city =>
                    this.renderCity(city)
                )}
            </svg>
        </Paper>)

    }
}