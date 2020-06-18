import React from "react";
import {Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import NavBar from '../NavBar/NavBar';
import Resume from "../Resume/Resume";
import './Page1.css';

 function Page1() {

     return (
       <div className="App">
           <NavBar />
           <SearchBar />
       </div>

     );

 }

 export default Page1;