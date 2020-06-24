import React from 'react';
import './Button.css';

class ViewButton extends React.Component {
render(){
  return (
    <div className="hvr-forward">
      <a className="before" href="www.#.com">view work</a>
    </div>
  );
}
}

export default ViewButton;