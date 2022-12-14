import React from "react";
import theme1 from "../../assets/theme1.png";
import theme2 from "../../assets/theme2.png";
import theme3 from "../../assets/theme3.png";
import theme4 from "../../assets/theme4.png";
import theme5 from "../../assets/theme5.png";
import theme6 from "../../assets/theme6.png";
import theme7 from "../../assets/theme7.png";
import theme8 from "../../assets/theme8.png";
import theme9 from "../../assets/theme9.png";
import theme10 from "../../assets/theme10.png";
import "./Theme.css";

const Theme = () => {
  return (
    <div className="theme__con">
      <div className="theme__head">
        <h1>Build simply.</h1>
        <p>Create any kind of website. No code, no manuals, no limits.</p>
      </div>
      <div className="theme__body">
        <div className="body__images">
          <div className="theme__images1">
            <img src={theme1} className="theme1" alt="" />
            <div className="theme23">
              <img src={theme2} className="theme2" alt="" />
              <img src={theme3} className="theme3" alt="" />
            </div>
            <img src={theme4} className="theme4" alt="" />
          </div>
          <div className="theme__images2">
            <img src={theme5} className="theme5" alt="" />
            <img src={theme6} className="theme6" alt="" />
          </div>
          <div className="theme__images3">
            <img src={theme7} className="theme7" alt="" />
            <div className="theme89">
              <img src={theme8} className="theme8" alt="" />
              <img src={theme9} className="theme9" alt="" />
            </div>
            <img src={theme10} className="theme10" alt="" />
          </div>
        </div>
        <div className="body__text">
          We provide you with customizable tempelate and other design features
          to get you the website you desire with reliable web hosting.
        </div>
      </div>
      <div className="theme__tail">
        <p>Pick your desired theme</p>
        <hr />
      </div>
    </div>
  );
};

export default Theme;
