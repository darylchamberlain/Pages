import React from 'react';

import './Experience.css'

class Experience extends React.Component {
    render() {
        return (
            <div className="Experience">
            <div className="Summary">
                <h2>Professional Summary</h2>
                <p>Directing and implementing a broad range of revenue-generating design projects from conception
	               to launch. Readily translate business requirements into effective advertising campaigns.</p>
            </div>
            <div className="Manager">
                <h2>Art Manager</h2>
                <p>Hit Promotional Products Largo, FL - 2016 to 2020</p>
	            <p>Coordinate with Executive staff to efficiently lead and administer creative design
	            	projects in support of ongoing marketing and merchandising programs for national manufacturers.</p>
            </div>
            <div className="Supervisor">
                <h2>Art Supervisor</h2>
                <p>Hit Promotional Products Largo, FL - 2014 to 2016</p>
            </div>
            <div className="Designer">
                <h2>Graphic Designer</h2>
                <p>Hit Promotional Products Largo, FL - 2010 to 2014</p>
            </div>
            <div className="Artist">
                <h2>Production Artist</h2>
                <p>Hit Promotional Products Largo, FL - 2008 to 2010</p>
            </div>
    
            </div>           
            
        )
    }
}

export default Experience;