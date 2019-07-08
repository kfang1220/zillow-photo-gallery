import React, { Component } from 'react';

class LeftArrow extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <button className="Left-arrow" onClick={this.props.previousImage}>
                <div>Go Left!</div>
            </button>
        )
    }
}

export default LeftArrow;