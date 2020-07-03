import React from 'react';
import './Skills.css';

import Adobe from '../../ImageContainer/assets/adobe.svg'

import Photo from '../../ImageContainer/assets/photo.svg'

import Maya from '../../ImageContainer/assets/maya.svg'

import Office from '../../ImageContainer/assets/office.svg'

import Code from '../../ImageContainer/assets/CODE.svg'

import Video from '../../ImageContainer/assets/video.svg'

class Skills extends React.Component {
    render() {
        return (
            <div className="Skills">
                <div className="Icon">
                    <img src={Adobe} alt="bottle" />
                    <p className="Text">Adobe Cloud</p>  
                </div>
                    <div className="BarContainer ">
                        <div className="Adobe Line animate__animated animate__slideInLeft"></div>   
                    </div>
                    <div className="Icon">
                    <img src={Office} alt="bottle" />
                <p className="Text">MS Office</p> 
                </div>
                <div className="BarContainer">
                    <div className="Office Line animate__animated animate__slideInLeft">    
                    </div>   
                </div>
                <div className="Icon">
                <img src={Code} alt="bottle" />
                <p className="Text">Coding</p> 
                </div>
                <div className="BarContainer">
                     <div className="Coding Line animate__animated animate__slideInLeft">
                     </div>   
                 </div>
                 <div className="Icon">
                 <img src={Photo} alt="bottle" />
                 <p className="Text">Photography</p> 
                 </div>
                 <div className="BarContainer">
                     <div className="Photography Line animate__animated animate__slideInLeft"> 
                     </div>   
                 </div>
                 <div className="Icon">
                 <img src={Maya} alt="bottle" />
                 <p className="Text">Maya</p> 
                 </div>
                 <div className="BarContainer">
                     <div className="Maya Line animate__animated animate__slideInLeft"> 
                     </div>   
                 </div>
                 <div className="Icon">
                 <img src={Video} alt="bottle" />
                 <p className="Text">Video</p> 
                 </div>
                 <div className="BarContainer">
                     <div className="Graphic Line animate__animated animate__slideInLeft">    
                     </div>   
                 </div>
            </div>
        )
    }
}

export default Skills;