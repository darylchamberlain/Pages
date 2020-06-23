import React from 'react';
import './Skills.css';

class Skills extends React.Component {
    render() {
        return (
            <div className="Skills">
                <h2>Skills</h2>
                <p className="Text">Adobe Cloud</p>  
                <div className="BarContainer">
                    <div className="Adobe Line">
                    </div>   
                </div>
                <p className="Text">MS Office</p> 
                <div className="BarContainer">
                    <div className="Office Line">    
                    </div>   
                </div>
                <p className="Text">Coding</p> 
                <div className="BarContainer">
                     <div className="Coding Line">
                     </div>   
                 </div>
                 <p className="Text">Photography</p> 
                 <div className="BarContainer">
                     <div className="Photography Line"> 
                     </div>   
                 </div>
                 <p className="Text">Maya</p> 
                 <div className="BarContainer">
                     <div className="Maya Line"> 
                     </div>   
                 </div>
                 <p className="Text">Graphic Design</p> 
                 <div className="BarContainer">
                     <div className="Graphic Line">    
                     </div>   
                 </div>
            </div>
        )
    }
}

export default Skills;