import React from "react";
import "./Portfolio.css";
import image1 from "./project1.png";
import image2 from "./project2.jpg";
import image3 from "./project3.jpg";

export default function Portfolio() {
  const showProject1 = () => {
    const websiteUrl = "https://aayus10.github.io/LandingPage/";

    // Redirect to the specified website
    window.open(websiteUrl, "_blank");
  };

  const showProject2 = () => {
    const websiteUrl = "https://aayus10.github.io/ToDoListProject/";

    // Redirect to the specified website
    window.open(websiteUrl, "_blank");
  };

  const showProject3 = () => {
    const websiteUrl = "https://aayus10.github.io/MantineUtilityApp/";

    // Redirect to the specified website
    window.open(websiteUrl, "_blank");
  };
  return (
    <>
      <div className="portfolio-container">
        <h1 className="topic">My Portfolio</h1>
        <div className="line"></div>
        <div className="cards">
          <div class="card">
            <img src={image1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Responsive Landing Page</h5>
              <p class="card-text">
                Landing Page of single page of a website designed using Tailwind
                and Mantine library.
              </p>
              <div className="view-button">
                <button onClick={showProject1} type="submit">
                  VIEW DEMO
                </button>
              </div>
            </div>
          </div>
          <div class="card">
            <img src={image3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Utility Application</h5>
              <p class="card-text">
                Basic Utility Apps (Text Editor + Weather Application) based on
                core concepts of React JS
              </p>
              <div className="view-button">
                <button onClick={showProject3} type="submit">
                  VIEW DEMO
                </button>
              </div>
            </div>
          </div>
          <div class="card">
            <img src={image2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">To Do List (Task Manager)</h5>
              <p class="card-text">
                Developed a user-friendly task management application having
                useful features with CRUD functionality,
              </p>
              <div className="view-button">
                <button onClick={showProject2} type="submit">
                  VIEW DEMO
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
