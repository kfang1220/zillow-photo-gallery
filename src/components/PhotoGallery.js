import React, { Component } from 'react';
import Photo from './Photo.js'
import Swipe from './Swipe.js';

class PhotoGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: this.props.photos,
            index: 0
        }
    }

    render() {
        //console.log(this.props.photos[0])
        return (
            // place holder
            // Will have photo components here
            <div className="Photo-gallery">
                <h4>PhotoGallery</h4>
                {/* <Photo image={this.props.photos[0]}/> */}
                <Swipe images={this.props.photos} index={this.state.index} />
            </div>
           
        )
    }
}

export default PhotoGallery;