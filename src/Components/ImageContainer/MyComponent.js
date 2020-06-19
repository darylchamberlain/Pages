import React from 'react';

import Images from './Images';

{ Images.map(({id, src, title, description}) => <img key={id} src={src} title={title} alt={description} />)

// ...snip

this.state = {
    Images: []
  }
  
  // ...snip
  
  componentDidMount() {
    const Images = ImageLoader()
    this.setState({Images})
  }
  
  // render images from state