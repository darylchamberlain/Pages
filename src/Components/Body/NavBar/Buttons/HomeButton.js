import React from 'react';
import './Button.css';

class HomeButton extends React.Component {
render(){
  return (
    <div className="wrapper">
      <a className="Home" href="/Home">Daryl Chamberlain</a>
    </div>
  );
}
}

export default HomeButton;