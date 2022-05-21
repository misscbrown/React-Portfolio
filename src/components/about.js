import React from "react";
import Cbrown from "../assets/images/cbrown-smiling.jpg"

function About() {
    return (
        <section class="about-me" id="about">
        <h2 class="section__title section__title--about">Who I am</h2>
        <p class="section__subtitle section__subtitle--about">Junior Developer from Birmingham</p>
        <div class="about-me__body">
            <p>I'm into everything fintech and musictech. I have a music industry background
                and that has led me into exploring tech. I come from a startup culture (I have
                had my own) and consider myself somewhat of an innovative creative entrepreneur!
            </p>
            <p>I have a strong eye for detail and am really keen to explore front end development
                and UX/UI design. My industry background, startup knowledge and ability to think 
                outside the box, give me a competitive advantage.
            </p>
        </div>

        <img src={Cbrown} alt="c brown smiling" class="about-me__img"/>
</section>
    );
  }
  
  export default About;