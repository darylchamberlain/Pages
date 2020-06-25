import React from 'react';
import './Button.css';

class HomeButton extends React.Component {
render(){
  return (
    <div className="wrapper">
      <a className="Home">
        <span className="Daryl">DarylChamberlain</span>
      </a>
    </div>
  );
}
}

export default HomeButton;