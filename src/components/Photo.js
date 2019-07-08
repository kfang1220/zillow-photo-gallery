import React, { Component } from 'react'
import '../css/photo.css';

class Photo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="Photo-image">
                <img className="Main-image" src={this.props.image.url} />
                <h2>{this.props.image.caption}</h2>
            </div>
        )
    }
}

export default Photo;