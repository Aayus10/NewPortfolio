import React from "react";
import Typed from "typed.js";
import "./Intro.css";

export default function Intro() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Tech Enthusiast", "Frontend Developer", "Engineering Student"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div>
      <div className="intro-container">
        <div className="introsection">
          <div className="name">Aayush Shrestha</div>
          <div className="describe">
            I'm a <br />
            <span className="aText" ref={el} />
          </div>
        </div>
      </div>
    </div>
  );
}
