import React, { Component } from 'react';
import Photo from './Photo.js'
import SwipeAndDisplay from './SwipeAndDisplay.js';
import PickAndDisplay from './PickAndDisplay.js';

class PhotoGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: this.props.photos,
            currentIndex: 0
        }

        //did not have to bind, if I used es6 arrow functions but chose to do both;
        this.onLeftClick = this.onLeftClick.bind(this);
        this.onRightClick = this.onRightClick.bind(this);
        this.onGalleryClick = this.onGalleryClick.bind(this);
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

    onGalleryClick(event) {
        this.setState({
            currentIndex: event.target.getAttribute('index')
        })
    }



    render() {
        return (
            <div className="Photo-gallery">
                <SwipeAndDisplay images={this.props.photos} onLeftClick={this.onLeftClick} onRightClick={this.onRightClick} index={this.state.currentIndex} />
                <PickAndDisplay images={this.props.photos} index={this.state.currentIndex} onGalleryClick={this.onGalleryClick}/>
            </div>
           
        )
    }
}

export default PhotoGallery;