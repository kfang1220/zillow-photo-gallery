import React, { Component } from 'react'

class Photo extends Component {
// temporary state, might become stateless
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        console.log(this.props.image)
        return (
            // <h1>Single photo</h1>
            <div className="Photo-image">
                <h1>hi</h1>
                <img src={this.props.image.url} />
                <h2>{this.props.image.caption}</h2>
            </div>
        )
    }
}

export default Photo;