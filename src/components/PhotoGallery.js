import React, { Component } from 'react';
import Photo from './Photo.js'

class PhotoGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        //console.log(this.props.photos[0])
        return (
            // place holder
            // Will have photo components here
            <div className="Photo-gallery">
                <h1>PhotoGallery</h1>
                <Photo image={this.props.photos[0]}/>
            </div>
           
        )
    }
}

export default PhotoGallery;