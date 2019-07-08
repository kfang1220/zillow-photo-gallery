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
        this.onLeftClick = this.onLeftClick.bind(this);
        this.onRightClick = this.onRightClick.bind(this);
        this.onGalleryClick = this.onGalleryClick.bind(this);
    }

    //use es6 syntax to avoid binding functions
    //install prettier

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
                <h4>PhotoGallery</h4>
                {/* <Photo image={this.props.photos[0]}/> */}
                <SwipeAndDisplay images={this.props.photos} onLeftClick={this.onLeftClick} onRightClick={this.onRightClick} index={this.state.currentIndex} />
                <PickAndDisplay images={this.props.photos} index={this.state.currentIndex} onGalleryClick={this.onGalleryClick}/>
            </div>
           
        )
    }
}

export default PhotoGallery;