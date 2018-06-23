import React, {Component} from 'react'
import Hexagon from './Hexagon'
//
import css from '../css/main.css'

const HEXAGON_SIZE = 80;
const MAP_SIZE = 5;

class Map extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        let x = 0;
        let y = 0;
        let size = 80;
        // const c = this.context;
        // c.beginB
        // c.moveTo(75, 50);
        // c.lineTo(100, 75);
        // c.lineTo(100, 25);
        // c.fillStyle = '#000';
        // c.stroke();

    }

    const
    Aux = props => props.children;

    generateHexagons = () => {
        let hexagons = [];
        for(let y = 0; y < MAP_SIZE; y++) {
            for (let x = 0; x < MAP_SIZE; x++) {
                let offsetX = y % 2 === 0 ? 0 : HEXAGON_SIZE / 2;
                hexagons.push(<Hexagon Hexagon key={`${x + 1}-${y + 1}`} size={HEXAGON_SIZE} position={{x, y}} data={{offsetX}}/>)
            }
        }
        return hexagons;
    }

    render() {
        return (
            <svg id="map" width="100%" height="100%">
                {this.generateHexagons()}
            </svg>
        )
    }
}


export default Map