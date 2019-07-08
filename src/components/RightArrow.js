import React, { Component } from 'react';

class RightArrow extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <i className="Right-arrow right"  onClick={this.props.nextImage}>
            </i>
        )
    }
}

export default RightArrow;