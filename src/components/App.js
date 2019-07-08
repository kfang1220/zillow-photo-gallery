import React, { Component } from 'react';
import '../css/app.css';
import PhotoGallery from './PhotoGallery';
import arrayOfPhotos from './api_data';

class App extends Component {
  render() {
    console.log(arrayOfPhotos)
    return (
      <div className="App">
        <h1 className="Zillow-Photo-Gallery">Zillow Photo Gallery</h1>
        <PhotoGallery 
          photos={arrayOfPhotos}
         />
      </div>
    );
  }
}

export default App;
