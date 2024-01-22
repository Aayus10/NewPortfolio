import React from "react";
import "./Portfolio.css";
import image1 from "./project1.png";
import image2 from "./project2.png";
import image3 from "./project3.jpg";

export default function Portfolio() {
  return (
    <>
      <div className="portfolio-container">
        <h1 className="topic">My Portfolio</h1>
        <div className="line"></div>
        <div className="cards">
          <div class="card" style={{ width: "18rem" }}>
            <img src={image1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Text Utility App</h5>
              <p class="card-text">
                Designed a simple text utility app in React that can perform
                simple text manipulations.
              </p>
              <div className="view-button">
                <a href="/" class="btn btn-dark">
                  VIEW
                </a>
              </div>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src={image2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Quiz App</h5>
              <p class="card-text">
                Designed and implemented a responsive React-based quiz
                application, leveraging state management and CSS for intuitive
                user interactions and a visually appealing layout.
              </p>
              <div className="view-button">
                <a href="/" class="btn btn-dark">
                  VIEW
                </a>
              </div>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src={image3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">
                Telecom Customer Churn Prediction System
              </h5>
              <p class="card-text">
                Utilized Python and its libraries to develop a telecom customer
                churn prediction system, analyzing patterns and providing
                insights with the help of data analysis and machine learning
                concepts.
              </p>
              <div className="view-button">
                <a href="/" class="btn btn-dark">
                  VIEW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
