import React from "react";
import "./App1.css";
import Hero from "./assets/grid_0 (8).png";
import logo from "./assets/PixelBloom-1 (3).png";
import { Link, useNavigate } from "react-router-dom";

const App1 = () => {
  return (
    <div className="container">
      <div className="text">
        <div className="logo-image">
          <img src={logo}></img>
        </div>
        <p>
          Transform your website or app with AI-generated images that perfectly
          match your brand and aesthetic! Create stunning UI templates that will
          take your design to the next level.
        </p>
        <Link to="/image">
          <button>Start Now!</button>
        </Link>
      </div>

      <div className="image">
        <img src={Hero}></img>
      </div>
    </div>
  );
};

export default App1;
