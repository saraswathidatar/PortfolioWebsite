import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
             <Image src="https://res.cloudinary.com/dxieulu0p/image/upload/v1565591358/backlit-beach-dawn_cyrasb.jpg" className="header-image" />
             <div class="centered"><h2>Saraswathi Datar</h2></div>
      </div>
    )
  }
}

export default Landing;
