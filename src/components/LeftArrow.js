import React, { Component } from 'react';
import '../css/arrow.css'

class LeftArrow extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <i className="Left-arrow left" onClick={this.props.previousImage}>
            </i>
        )
    }
}

export default LeftArrow;