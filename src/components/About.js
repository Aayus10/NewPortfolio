import React from "react";
import "./About.css";

import pp from "./pp.jpg";

export default function About() {
  return (
    <>
      <div className="abt-container">
        <div className="second">
          <h1 className="topic">About Me</h1>
          <div className="line"></div>
          <div className="abt-text">
            👋 Welcome to my website! I'm Aayush Shrestha, a final year computer
            engineering student at Advanced College of Engineering and
            Management with a passion for technology, innovation, and
            problem-solving.
          </div>
          <div className="abt-text2">
            <img className="pp2 " src={pp} alt="" />
            <div className="desc">
              <div className="heading">React JS Based Frontend Developer</div>
              <br />
              <li>👤 Birthday: April 15, 2001</li>
              <li>👤 City: Kathmandu, Nepal</li>
              <li>👤 Degree: Bachelors</li>
              <li>👤 Freelance: Available</li>
              <li>
                👤 Interests: Data Science, SDLC (Software Development Life
                Cycle)
              </li>
              <div className="desc2">
                Whether you're a fellow student, a tech enthusiast, a potential
                collaborator, or just curious about the possibilities of
                computer engineering, I invite you to explore the diverse facets
                of my work and interests showcased here.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
