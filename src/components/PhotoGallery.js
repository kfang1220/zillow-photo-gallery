import React, { Component } from 'react';
import Photo from './Photo.js'
import SwipeAndDisplay from './SwipeAndDisplay.js';

class PhotoGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: this.props.photos,
            currentIndex: 0
        }
        this.onLeftClick = this.onLeftClick.bind(this);
        this.onRightClick = this.onRightClick.bind(this);
    }

    onLeftClick() {
        if(this.state.currentIndex > 0) {
            this.setState({
                currentIndex: this.state.currentIndex - 1
            })
        }
    }

    onRightClick() {
          if(this.state.currentIndex < this.state.images.length -1) {
            this.setState({
                currentIndex: this.state.currentIndex + 1
            })
        }
    }



    render() {
        //console.log(this.props.photos[0])
        console.log(this.state.currentIndex)
        return (
            <div className="Photo-gallery">
                <h4>PhotoGallery</h4>
                {/* <Photo image={this.props.photos[0]}/> */}
                <SwipeAndDisplay images={this.props.photos} onLeftClick={this.onLeftClick} onRightClick={this.onRightClick} index={this.state.currentIndex} />
            </div>
           
        )
    }
}

export default PhotoGallery;