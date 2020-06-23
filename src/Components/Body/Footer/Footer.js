import React from 'react';

import './Footer.css';

import Indeed from '../Footer/Indeed';

class Footer extends React.Component{
    render(){
        return(
            <div className="Footer">
               <div className="Indeed">
                   <Indeed />
                  </div>
            </div>
        )
    }
}

export default Footer;