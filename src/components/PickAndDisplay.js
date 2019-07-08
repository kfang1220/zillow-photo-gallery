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
            imagesPerPage: 11
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
        // pagination attempt
        // let img = this.state.images;
        const { images, currentPage, imagesPerPage} = this.state;
        const indexOfLastImage = currentPage * imagesPerPage;
        const indexOfFirstImage = indexOfLastImage - imagesPerPage;
        const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

        const generateImages = currentImages.map( (image, index) => {
            return <SmallImage image={image.url} index={index} key={index} onImageClick={this.props.onGalleryClick}/>
            })

        const pageNumbers = []
        for(let i = 1; i <= Math.ceil(this.state.images.length/this.state.imagesPerPage); i++) {
            pageNumbers.push(i)
        }

        const generatePageNumbers = pageNumbers.map(num => {
            return (
                <button
                  key={num}
                  id={num}
                  onClick={this.handleClick}
                >
                  {num}
                </button>
              );
        })


        
        return (
            <div>
                <div className="Gallery-display">
                {/* { img.map( (image, index) => {
                return <SmallImage image={image.url} index={index} key={index} onImageClick={this.props.onGalleryClick}/>
                })} */}
                {generateImages}
            </div>
                <div>
                {generatePageNumbers}
                </div>
            </div>
            
        )
    }
}

export default PickAndDisplay;