import React, { Component } from 'react';
import '../css/App.css';
import PhotoGallery from './PhotoGallery';

class App extends Component {
  render() {
    const arrayOfPhotos = [
      {
        url: 'https://www.opodo.co.uk/blog/wp-content/uploads/sites/12/2016/04/jiuzhaigou-lake.jpg',
        caption: 'This hidden village contains secrets'
      },
      {
        url: 'https://allthatsinteresting.com/wordpress/wp-content/uploads/2014/11/unesco-world-heritage-sites-belize-barrier-reef-aerial.jpg',
        caption: 'How deep is the ocean?'
      },
      {
        url: 'http://i.huffpost.com/gen/2536550/original.jpg',
        caption: 'New adventures away'
      }
    ]
    return (
      <div className="App">
        <h1 className="Zillow-Photo-Gallery">Zillow Photo Gallery</h1>
        <PhotoGallery 
          photos = {arrayOfPhotos}
         />
      </div>
    );
  }
}

export default App;
