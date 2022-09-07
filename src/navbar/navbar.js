import "./navbar.css";
import image from "./assets/logo.png";
import React from "react";

function navbar() {
  return (
    <>
      <nav>
        <ul>
          <li className="brand"><img src={image} alt="Music" />Music</li>
          <li>Home</li>
          <li>About</li>
        </ul>
      </nav>
    </>
  );
}

export default navbar;
