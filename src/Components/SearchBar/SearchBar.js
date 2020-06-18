import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="SearchBar">
                <h2>Portfolio</h2>
                <input placeholder="Look for Resume, Designs, etc" />
                <button className="SearchButton">SEARCH</button>
            </div>
        )
    }
}

export default SearchBar;