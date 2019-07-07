import React, { Component } from 'react';
import Photo from './Photo.js'

class PhotoGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            // place holder
            // Will have photo components here
            <div>
                <h1>PhotoGallery</h1>
                <Photo />
            </div>
           
        )
    }
}

export default PhotoGallery;