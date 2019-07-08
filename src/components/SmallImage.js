import React, { Component } from 'react';
import '../css/SmallImage.css'

class SmallImage extends Component {
    constructor(props) {
        super(props)

        this.state ={}
    }
    render() {
        return (
            <div className="Small-image">
                <img className="image" src={this.props.image} index={this.props.index} onClick={this.props.onImageClick}/>
            </div>
        )
    }
}

export default SmallImage