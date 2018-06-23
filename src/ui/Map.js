import React, {Component} from 'react'
import Hexagon from './Hexagon'
//
// import css from '../css/main.css'

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
        for(let x = 1; x <= MAP_SIZE; x++) {
            for (let y = 1; y <= MAP_SIZE; y++) {
                hexagons.push(<Hexagon Hexagon key={`${x}-${y}`} size={HEXAGON_SIZE} position={{x, y}}/>)
            }
        }
        return hexagons;
    }

    render() {
        return (
            <svg id="map">
                {this.generateHexagons()}
            </svg>
        )
    }
}


export default Map