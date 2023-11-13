import React from "react";
import Image from "../assets/Photo-grid.png";

function Hero() {
  return (
    <section className="hero_section">
      <div className="img_div">
        <img src={Image} alt="" />
      </div>
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;
