import React, { Component } from 'react';
//import '../css/LeftArrow.css'

class LeftArrow extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            //temp buttons to make more visible
            <button className="Left-arrow" onClick={this.props.previousImage}>
                <div>Go Left!</div>
            </button>
        )
    }
}

export default LeftArrow;