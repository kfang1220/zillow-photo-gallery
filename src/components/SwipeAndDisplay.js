import React, { Component } from 'react';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import Photo from './Photo';
import '../css/swipeAndDisplay.css';
//we can import as well
const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class SwipeAndDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            currentIndex: 0
        }

        // this.previousImage = this.previousImage.bind(this);
        // this.nextImage = this.nextImage.bind(this);
    }

    componentWillMount() {
        this.setState({images: this.props.images})
        this.setState({currentIndex: this.props.index})
    }

    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            // Swipe will be a container for a single photo and to swipe through images
            <div className="Swipe" >
                <LeftArrow previousImage={this.props.onLeftClick}/>
                
                <Photo image={this.state.images[this.props.index]} />
                
                <RightArrow nextImage={this.props.onRightClick} />
            </div>
        )
    }
}

export default SwipeAndDisplay;