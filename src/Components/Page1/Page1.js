import React from "react";

import {Link } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";

import NavBar from '../NavBar/NavBar';

import Resume from "../Resume/Resume";

import './Page1.css';

import Footer from '../Footer/Footer';
import ImageContainer from "../ImageContainer/ImageContainer";

 function Page1() {

     return (
       <div>
       <div className="App">
           <NavBar />
           <SearchBar />
           
       </div>
      <Resume />
      <ImageContainer />
       </div>
     );

 }

 export default Page1;