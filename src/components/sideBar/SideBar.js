import React from "react";
import "./SideBar.css";
import num from "../../assets/5.png";
import { BsChevronRight } from "react-icons/bs";

const SideBar = () => {
  return (
    <div className="side__con">
      <div className="side__top">
        <div className="side__head">
          <img src={num} className="num" alt="" />
          <div className="head__info">
            <h1>Let’s set up your portfolio</h1>
            <div className="side__head__text">
              <p>View All Steps</p>
              <BsChevronRight />
            </div>
          </div>
        </div>

        <div className="side__lists__div">
          <hr className="hr" />
          <div className="side__lists ">
            <div className="side__list active">
              <p>Home</p>
            </div>
          </div>
          <div className="side__lists ">
            <div className="side__list">
              <p>Activity</p>
            </div>
          </div>
          <div className="side__lists ">
            <div className="side__list">
              <p>Site & App</p>
              <BsChevronRight />
            </div>
            <hr className="hr" />
          </div>
          <div className="side__lists ">
            <div className="side__list">
              <p>Portfolio</p>
              <BsChevronRight />
            </div>
            <hr className="hr" />
          </div>
          <div className="side__lists ">
            <div className="side__list">
              <p>Contacts</p>
              <BsChevronRight />
            </div>
          </div>

          <div className="side__lists ">
            <div className="side__list">
              <p>Communications</p>
              <BsChevronRight />
            </div>
          </div>

          <div className="side__lists ">
            <div className="side__list">
              <p>Automations</p>
            </div>
          </div>

          <div className="side__lists ">
            <div className="side__list">
              <p>Marketing & SEO</p>
              <BsChevronRight />
            </div>
          </div>

          <div className="side__lists ">
            <div className="side__list">
              <p>Analytics & Reports</p>
              <BsChevronRight />
            </div>
          </div>

          <div className="side__lists ">
            <div className="side__list">
              <p>Finances</p>
              <BsChevronRight />
            </div>
          </div>

          <div className="side__lists ">
            <div className="side__list">
              <p>Settings</p>
            </div>
          </div>

          <div className="side__lists ">
            <div className="side__list">
              <p>Apps</p>
              <BsChevronRight />
            </div>
          </div>
        </div>
      </div>

      <div className="side__bottom">
        <p>Logout</p>
        <BsChevronRight />
      </div>
    </div>
  );
};

export default SideBar;
