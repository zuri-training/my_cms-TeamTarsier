import React from "react";
import heroarea from "../../assets/heroarea.png";
import Header from "../Header/Header";
import "./Heroarea.css";

const Heroarea = () => {
  return (
    <div className="heroarea__con">
      <Header />

      <div className="heroarea__content">
        <h1>
          Design a website without a designer and start a blog that sets you up
          for success
        </h1>

        <p>
          The future of business is yours to shape. Sign up for a free trial and
          enjoy 3 months of Maisout for $4.50/month on select plans..
        </p>
        <div className="start__button__div">
          <div className="start__button">Get Started</div>
        </div>
      </div>
    </div>
  );
};

export default Heroarea;
