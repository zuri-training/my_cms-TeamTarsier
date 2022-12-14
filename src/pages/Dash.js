import React from "react";
import DashBody from "../components/dashBody/DashBody";
import DashHead from "../components/dashHead/DashHead";
import SideBar from "../components/sideBar/SideBar";
import "./styles/Dash.css";

const Dash = () => {
  return (
    <div className="dash__con">
      <DashHead />
      <div className="dash__content">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="dashbody">
          {" "}
          <DashBody />
        </div>
      </div>
    </div>
  );
};

export default Dash;
