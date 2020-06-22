import React from "react";

import './Home.css';

import NavBar from '../Body/NavBar/NavBar';

import Resume from "../Resume/Resume";

import Portfolio from '../Portfolio/Portfolio'

 function Home() {

     return (
       <div className="Home">
         <NavBar />
         <Resume />
         <Portfolio />
        </div>
     );

 }

 export default Home;