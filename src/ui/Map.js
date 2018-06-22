import React, {Component} from 'react'

class Map extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        const c = this.context;
        c.fillStyle = "#FF0000";
        c.fillRect(0, 0, 150, 75);
    }

    render() {
        return (
            <canvas ref={(c) => this.context = c.getContext('2d')} width={640} height={425}/>
        )
    }
}


export default Map