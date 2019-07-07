import React, { Component } from 'react'

class Photo extends Component {
// temporary state, might become stateless
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <h1>Single photo</h1>
        )
    }
}

export default Photo;