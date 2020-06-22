import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <h2>Daryl Chamberlain</h2>
                {/* <input placeholder="Look for Resume, Designs, etc" /> */}
                {/* <button className="SearchButton">SEARCH</button> */}
            </div>
        )
    }
}

export default Header;