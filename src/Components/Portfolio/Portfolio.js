import React from 'react';

import {Link } from "react-router-dom";

import './Portfolio.css';

import NavBar3 from '../NavBar3/NavBar3';

import ImageContainer from '../ImageContainer/ImageContainer';


class Portfolio extends React.Component {
    render(){
        return(
           <div>
            <NavBar3 />
            <ImageContainer />
            </div>
        )
    }
}

export default Portfolio;