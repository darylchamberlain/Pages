import React from 'react';

import indeed from '../../ImageContainer/assets/indeed.svg'; // Tell webpack this JS file uses this image

class Indeed extends React.Component {
    render() {
        return(
          <div>
            <img src={indeed} alt="indeed" />
          </div>
        )
    }
}

export default Indeed ;