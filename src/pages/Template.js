import React from "react";
import "./styles/templateStyle.css";
import pic1 from "../assets/photo_2022-12-09_16-33-18.jpg";
import pic2 from "../assets/photo_2022-12-09_16-33-07.jpg";
import pic3 from "../assets/photo_2022-12-09_16-33-37.jpg";
import pic4 from "../assets/photo_2022-12-09_16-45-33.jpg";
import pic5 from "../assets/photo_2022-12-09_16-45-41.jpg";
import pic6 from "../assets/photo_2022-12-09_16-45-45.jpg";

const Template = () => {
  return (
    <div className="template">
      <div class="templatechoices">
        <div class="templates">
          <img src={pic1} style="width: 100%;" />
          <p>Company templates</p>
        </div>

        <div class="templates">
          <img src={pic2} alt="" />
          <p>Blogs templates</p>
        </div>

        <div class="templates">
          <img src={pic3} alt="" />
          <p>Education templates</p>
        </div>

        <div class="templates">
          <img src={pic4} alt="" />
          <p>E-commerce templates</p>
        </div>

        <div class="templates">
          <img src={pic5} alt="" />
          <p>Learning Management System templates</p>
        </div>

        <div class="templates">
          <img src={pic5} alt="" />
          <p>E-Health templates</p>
        </div>
      </div>
    </div>
  );
};

export default Template;
