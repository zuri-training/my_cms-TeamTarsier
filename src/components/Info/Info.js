import React from "react";
import info1 from "../../assets/info1.png";
import info2 from "../../assets/info2.png";
import info3 from "../../assets/info3.png";
import "./Info.css";

const Info = () => {
  return (
    <div className="info__con">
      <div className="info__top">
        We are here to help you build a website that will help you grow your
        customer base.
      </div>
      <hr className="hr" />
      <div className="info__bottom">
        <div className="info__images">
          <img src={info1} className="info1" alt="" />
          <div className="bottom__images">
            <img src={info2} className="info2" alt="" />
            <img src={info3} className="info3" alt="" />
          </div>
        </div>
        <div className="info__text">
          Build a site. Sell your stuff. Start a blog. And so much more.
        </div>
      </div>
    </div>
  );
};

export default Info;
