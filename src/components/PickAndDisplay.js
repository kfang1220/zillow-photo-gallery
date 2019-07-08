import React, { Component } from 'react';
import SmallImage from './SmallImage.js'
import '../css/PickAndDisplay.css'

class PickAndDisplay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
            currentIndex: 0,
            currentPage: 1,
            imagesPerPage: 5
        }
    }

    //change page to the number chosen
    handlePageClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        })
    }

    componentWillMount() {
        this.setState({images: this.props.images})
        this.setState({currentIndex: this.props.index})
    }


    render() {
        // const renderImages = this.state.images.map((image,index)=> {
        //     return <SmallImage key={index}/>
        // })
        let img = this.state.images;
        console.log(img)
        
        return (
            <div className="Gallery-display">
                { img.map( (image, index) => {
                return <SmallImage image={image.url} index={index} key={index} onImageClick={this.props.onGalleryClick}/>
                }
        )}
            </div>
        )
    }
}

export default PickAndDisplay;