import React, { Component } from 'react';

class About extends Component {
  render() {
    return(
      <div className="aboutme-background">
      <img
           src="https://res.cloudinary.com/dxieulu0p/image/upload/w_320,h_320,c_fill,r_max/v1565764790/person_llxiqn.png"
           class="center"
           />

           <p class="aboutme-paragraph">My name is Saraswathi Datar and I am currently a Student at Portland State University
           pursuing a Masters in Computer Science. Languages known to me are C,C#,Java,Rust,HTML/CSS. I am interested in security. I have completed computer security course which dealt with smashing the stack,code injection exploits,defeating simple password storage schemes. Further improving my security skills with web security that had us perform SQL injections,code injection,command injection,XML and XSS injections. Moving in that direction I learnt Rust programming language which is memory safe and has trustworthy concurrency. I also have an experience in web development and Android software development.

           </p>

      </div>
    )
  }
}

export default About;
