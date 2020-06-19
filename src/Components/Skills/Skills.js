import React from 'react';
import './Skills.css';

class Skills extends React.Component {
    render() {
        return (
            <div className="Skills">
                <h2>Skills</h2>
                <div className="BarContainer">
                    <div className="Adobe Line">
                        <p className="Text">Adobe Creative Cloud</p>  
                    </div>   
                </div>
                <div className="BarContainer">
                    <div className="Office Line">
                        <p className="Text">MIcrosoft Office</p>  
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
                         <p className="Text">Manager</p>  
                     </div>   
                 </div>
            </div>
        )
    }
}

export default Skills;