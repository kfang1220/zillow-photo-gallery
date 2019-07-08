import React, { Component } from 'react';
import SmallImage from './SmallImage.js'
import '../css/pickAndDisplay.css'

class PickAndDisplay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
            currentIndex: 0,
            currentPage: 1,
            //using 11 to show changes in images
            imagesPerPage: 11
        }
    }

    //change page to the number chosen
    handlePageClick = (event) => {
        this.setState({
            currentPage: Number(event.target.getAttribute('id'))
        })
    }

    // Don't actually need will Mount, can directly change state
    // Also depricated life cycle, willMount and constructor can do the same thing.
    componentWillMount() {
        this.setState({
            images: this.props.images,
            currentIndex: this.props.index
        })
    }

    generatePageNumbers = (pageNumbers) => {
        return pageNumbers.map(num => {
            return (
                <button className="indiv-button"
                  key={num}
                  id={num}
                  onClick={this.handlePageClick}
                >
                  {num}
                </button>
              );
        })
    }

    generateImages = (currentImages) => {
        return currentImages.map( (image, index) => {
            return <SmallImage image={image.url} index={index} key={index} onImageClick={this.props.onGalleryClick}/>
            })
    } 


    render() {
        // pagination attempt
        // let img = this.state.images;
        const pageNumbers = []
        const { images, currentPage, imagesPerPage} = this.state;
        const indexOfLastImage = currentPage * imagesPerPage;
        const indexOfFirstImage = indexOfLastImage - imagesPerPage;
        const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

        for(let i = 1; i <= Math.ceil(this.state.images.length/this.state.imagesPerPage); i++) {
            pageNumbers.push(i)
        }
        console.log(pageNumbers)
        return (
            <div>
                <div className="Gallery-display">
                {this.generateImages(currentImages)}
            </div>
                <div className="pagination">
                {this.generatePageNumbers(pageNumbers)}
                </div>
            </div>
            
        )
    }
}

export default PickAndDisplay;