import React from "react";
import cBrownSmile from "../assets/images/cbrown-smiling.jpg"

function Header() {
    return (
      <section class="intro" id="home">
      <h1 class="section__title section__title--intro">
          Hey I'm <strong>Carla Brown</strong>
      </h1>
      
      <img src={cBrownSmile} alt="hackathon" class="portfolio__img"/>
  </section>
    );
  }
  
export default Header;
  


{/* <p class="section__subtitle section__subtitle--intro">Junior Developer</p> */}