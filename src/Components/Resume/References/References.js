import React from 'react';

import './References.css';

class References extends React.Component{
    render(){
        return(
            <div className="References">
                <h2>References</h2>
                <div className="container">
                    <div className="Left">
                        <p>Frank Capolongo:</p>
                        <p>Director of Overseas Sales</p>
                        <p>Hit Promotional Products</p>
                    </div>
                    <div className="Right">
                        <p>Krista Ward:</p>
                        <p>Director of Marketing</p>
                        <p>Hit Promotional Products</p>
                    </div>
                </div>
            </div> 
        )
    }
}

export default References;