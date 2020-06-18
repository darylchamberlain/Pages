import React from 'react';
import './Skills.css';

class Skills extends React.Component {
    render() {
        return (
            <div className="Skills">
                <h2 className="Padding">Skills</h2>
                <div className="Container">
                    <div className="Adobe Line">
                        <p className="Text">Adobe</p>  
                    </div>   
                </div>
                <div className="Container">
                    <div className="Office Line">
                        <p className="Text">Office</p>  
                    </div>   
                </div>
                <div className="Container">
                     <div className="Coding Line">
                         <p className="Text">Coding</p>  
                     </div>   
                 </div>
                 <div className="Container">
                     <div className="Photography Line">
                         <p className="Text">Photography</p>  
                     </div>   
                 </div>
                 <div className="Container">
                     <div className="Maya Line">
                         <p className="Text">Maya</p>  
                     </div>   
                 </div>
                 <div className="Container">
                     <div className="Coding Line">
                         <p className="Text">Manager</p>  
                     </div>   
                 </div>
            </div>
        )
    }
}

export default Skills;