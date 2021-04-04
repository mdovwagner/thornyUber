import React from 'react';
import { cities } from '../static/cities'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export default class CityCard extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        
    }
    handleMouseEnter (e) {
        var exampleFn = this.props.onMouseEnter || null;
        if (exampleFn) {
            exampleFn(e);
        }
    }

    handleMouseLeave (e) {
        var exampleFn = this.props.onMouseLeave || null;
        if (exampleFn) {
            exampleFn(e);
        }
    }

    render () {
        if (this.props.title === null) {
            return(<div />)
        }
        const city = cities[this.props.title];
        const bgStyle = { fill: "#B99976", stroke: "black"};
        const labelStyle = { fill: city.color, stroke: "black" };
        const textStyle = { fontFamily: "Gamja Flower", fontSize: "14"};
        let scale = (this.props.scale || 1);
        return (
            <div onClick={(event) => this.props.onClick(event, city.id)} className="card"  onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                    <svg width={75*scale} height={65*scale}>
                        <defs>
                            <style type="text/css">@import url('https://fonts.googleapis.com/css?family=Indie+Flower|Gamja+Flower|Xanh+Mono');</style>
                        </defs>
                        <g transform={"scale("+scale+")"}>
                            {/* <rect x="2" y="2" width="76" height="116" style={bgStyle} rx="5" />
                            <rect x="7" y="7" width="66" height="20" style={labelStyle} rx="2" />
                            <text x="40" y="22" textAnchor="middle" style={textStyle}>{city.id}</text>
                            <rect x="7" y="93" width="66" height="20" style={labelStyle} rx="2" />
                            <text x="40" y="108" textAnchor="middle" style={textStyle}>{city.id}</text> */}

                            <rect x="2" y="2" width="71" height="61" style={bgStyle} rx="1" />
                            <rect x="7" y="21.5" width="61" height="22" style={labelStyle} rx="2" />
                            <text x="37.5" y="37.5" textAnchor="middle" style={textStyle}>{city.id}</text>
                        </g>
                    </svg>
            </div>
        );
    }
}