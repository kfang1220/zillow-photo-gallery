import React, { Component } from 'react';

class RightArrow extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <button className="Right-arrow"  onClick={this.props.nextImage}>
                <div>Go right!</div>
            </button>
        )
    }
}

export default RightArrow;