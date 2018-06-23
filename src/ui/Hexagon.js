import React, {Component} from 'react'
import * as d3 from "d3";
// import { select } from 'd3-selection';


var h = (Math.sqrt(3) / 2),
    radius = 100,
    xp = 250,
    yp = 150,
    hexagonData = [
        {"x": radius + xp, "y": yp},
        {"x": radius / 2 + xp, "y": radius * h + yp},
        {"x": -radius / 2 + xp, "y": radius * h + yp},
        {"x": -radius + xp, "y": yp},
        {"x": -radius / 2 + xp, "y": -radius * h + yp},
        {"x": radius / 2 + xp, "y": -radius * h + yp}
    ];

// var drawHexagon = =>
// {
//     d3.svg.line()
//         .x(function (d) {
//             return d.x;
//         })
//         .y(function (d) {
//             return d.y;
//         })
//         .interpolate("cardinal-closed")
//         .tension("0.25");
// }

class Hexagon extends Component {

    constructor() {
        super();
        this.canvas = d3.select("body");
    }

    componentDidMount() {
        // const ctx = this.context;
        //
        // ctx.fillStyle = "#FF0000";
        // ctx.beginPath();
        // ctx.moveTo(75, 50);
        // ctx.lineTo(100, 75);
        // ctx.lineTo(100, 25);
        // ctx.fill();
    }


    // Aux = (props) => props.children;

    render() {
        const { size } = this.props;
        const Aux = (props) => props.children;

        const points = []
        return (

            <Aux>
                <polygon points="0,60,   0,20,  40,0,  80,20,  80,60,  40,80" fill="white" stroke="black"
                         strokeWidth="1"/>
                <polygon points="40,120,  40,80, 80,60, 120,80, 120,120, 80, 140" fill="white" stroke="black"
                         strokeWidth="1"/>
            </Aux>

        )
    }
}


export default Hexagon