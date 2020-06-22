import React from 'react';
import './Skills.css';

class Skills extends React.Component {
    render() {
        return (
            <div className="Skills">
                <h2>Skills</h2>
                <div className="BarContainer">
                    <div className="Adobe Line">
                        <p className="Text">Adobe Cloud</p>  
                    </div>   
                </div>
                <div className="BarContainer">
                    <div className="Office Line">
                        <p className="Text">MS Office</p>  
                    </div>   
                </div>
                <div className="BarContainer">
                     <div className="Coding Line">
                         <p className="Text">Coding</p>  
                     </div>   
                 </div>
                 <div className="BarContainer">
                     <div className="Photography Line">
                         <p className="Text">Photography</p>  
                     </div>   
                 </div>
                 <div className="BarContainer">
                     <div className="Maya Line">
                         <p className="Text">Maya</p>  
                     </div>   
                 </div>
                 <div className="BarContainer">
                     <div className="Coding Line">
                         <p className="Text">Design</p>  
                     </div>   
                 </div>
            </div>
        )
    }
}

export default Skills;