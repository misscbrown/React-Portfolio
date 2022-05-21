import React from "react";
import Hackathon from "../assets/images/4.png";
import devHub from "../assets/images/dev-hub.png";
import readMe from "../assets/images/5.png"
import weatherImg from "../assets/images/1.png"
import eCommerce from "../assets/images/ecommerce.png"
import planner from "../assets/images/2.png"

function Projects() {
    return (
      <section class="my-work" id="work">
            <h2 class="section__title">My Work</h2>
            <p class="section__subtitle section__subtitle--work">A selection of my range of work</p>

            <div class="portfolio">
                
                <a href="https://salty-woodland-88670.herokuapp.com/" class="portfolio__item"> 
                <img src={Hackathon} alt="hackathon" class="portfolio__img"/>
            </a>

            
            <a href="https://languagebytes.github.io/Junior-Dev-Job-Search-Engine/

            " class="portfolio__item"> 
                <img src={devHub} alt="junior devs" class="portfolio__img"/>
            </a>

            
            <a href="https://github.com/misscbrown/Readme-Creator" class="portfolio__item"> 
            <img src={readMe} alt="computer screen with glasses" class="portfolio__img"/>
            </a>

            
            <a href="https://github.com/misscbrown/weather-forecast-app" class="portfolio__item"> 
            <img src={weatherImg} alt="weather search" class="portfolio__img"/>
            </a>

            
            <a href="https://github.com/misscbrown/e-commerce-back-end" class="portfolio__item"> 
            <img src={eCommerce} alt="ecommerce store" class="portfolio__img"/>
            </a>

            
            <a href="https://misscbrown.github.io/Work-Day-Scheduler/Develop/" class="portfolio__item"> 
            <img src={planner} alt="to do list" class="portfolio__img"/>
            </a>

            </div>
        </section>
    );
  }
  
  export default Projects;