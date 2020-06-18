import React from 'react';

import './ImageContainer.css';

import {Link } from "react-router-dom";

class ImageContainer extends React.Component {
    render() {
        return(
            <div className="ImageContainer">
            <div className="Container">
              <div className="Image"></div>
              <div className="Image2"></div>
              <div className="Image3"></div>
              <div className="Image4"></div>
            </div>
              <div className="Container">
              <div className="Image5"></div>
              <div className="Image6"></div>
              <div className="Image7"></div>
              <div className="Image8"></div>
            </div>
            <div className="Container">
  <div className="Image9"></div>
  <div className="Image10"></div>
  <div className="Image11"></div>
  <div className="Image12"></div>
</div>
            </div>
        )
    }
}

export default ImageContainer;