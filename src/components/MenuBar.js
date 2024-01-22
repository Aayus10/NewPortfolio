import React from "react";
import "./MenuBar.css";
import Intro from "./Intro";
import About from "./About";
import Resume from "./Resume";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
export default function MenuBar() {
  return (
    <>
      <Router>
        <div className="menu-container">
          <div className="firstmenu">
            <div className="menu">
              <div className="intro">
                <img className="pp " src="/pp.jpg" alt="" />
                <br />
                Aayush Shrestha
                <br />
                <p>
                  <a
                    href="https://www.facebook.com/aayush.shrestha.5055"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook
                      size={30}
                      style={{ marginLeft: "-15px", color: "white" }}
                    />
                  </a>
                  <a
                    href="https://github.com/Aayus10"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub
                      size={30}
                      style={{ marginLeft: "25px", color: "white" }}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aayush-shrestha-28b063260/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin
                      size={30}
                      style={{ marginLeft: "25px", color: "white" }}
                    />
                  </a>
                </p>
              </div>

              <div className="pagebar">
                <ul>
                  <li>
                    <span class="icon">🏠</span>{" "}
                    <Link className="link" to="/">
                      HOME
                    </Link>
                  </li>
                  <li>
                    <span class="icon">👤</span> <Link to="/about">ABOUT</Link>
                  </li>
                  <li>
                    <span class="icon">📄</span>{" "}
                    <Link to="/resume">RESUME</Link>
                  </li>
                  <li>
                    <span class="icon">💻</span>{" "}
                    <Link to="/portfolio">PORTFOLIO</Link>
                  </li>
                  <li>
                    <span class="icon">📧</span>{" "}
                    <Link to="/contact">CONTACT</Link>
                  </li>
                </ul>
              </div>

              <div className="copyrighttxt">Copyright © 2024</div>
            </div>
          </div>
          <div className="containerempty">
            <Routes>
              <Route path="/about" element={<About />}></Route>
              <Route path="/resume" element={<Resume />}></Route>
              <Route path="/portfolio" element={<Portfolio />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/" element={<Intro />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}
