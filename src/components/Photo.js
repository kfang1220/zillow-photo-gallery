import React, { Component } from 'react'
import '../css/Photo.css';

class Photo extends Component {
// temporary state, might become stateless
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        //console.log(this.props)

        return (
            // <h1>Single photo</h1>
            
            <div className="Photo-image">
                <img className="image" src={this.props.image.url} />
                <h2>{this.props.image.caption}</h2>
            </div>
        )
    }
}

export default Photo;