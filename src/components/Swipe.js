import React, { Component } from 'react';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import Photo from './Photo';
import '../css/Swipe.css';

class Swipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            currentIndex: 0
        }

        this.previousImage = this.previousImage.bind(this);
        this.nextImage = this.nextImage.bind(this);
    }

    componentWillMount() {
        this.setState({images: this.props.images})
        this.setState({currentIndex: this.props.index})
    }

    // get images/captions from photo gallery through props


    /*           Functionality for Swiping                 */

    previousImage() {
        if(this.state.currentIndex > 0) {
            this.setState({
                currentIndex: this.state.currentIndex - 1
            })
        }
	}

    // Changes current index to know what image we are on but also know the previous index through prevState
    nextImage() {
        if(this.state.currentIndex < this.state.images.length -1) {
            this.setState({
                currentIndex: this.state.currentIndex + 1
            })
        }
	}



    render() {
        console.log(this.state.images)
        return (
            // Swipe will be a container for a single photo and to swipe through images
            <div className="Swipe" >
                <LeftArrow previousImage={this.previousImage}/>
                
                <Photo image={this.state.images[this.state.currentIndex]} />
                
                <RightArrow nextImage={this.nextImage} />
            </div>
        )
    }
}

export default Swipe;