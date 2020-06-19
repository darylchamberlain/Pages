import React from 'react';

import './ImageContainer.css';

import {Link } from "react-router-dom";

import team from './assets/team.jpg';

import team2 from './assets/team2.jpg';

import subway from './assets/subway.jpg';

import city from './assets/city.jpg';

import doug from './assets/doug.jpg';


class Logos extends React.Component {
    render() {
        return(
          <div className="Center">
            <img src={doug} alt="doug" />
            <img src={team} alt="team" />
            <img src={team2} alt="team2" />
            <img src={subway} alt="subway" />
            <img src={city} alt="city" />
          </div>
        )
    }
}

export default Logos;