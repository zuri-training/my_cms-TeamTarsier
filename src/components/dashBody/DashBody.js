import React from "react";
import "./DashBody.css";
import { HiPencil } from "react-icons/hi";
import { AiOutlineDown } from "react-icons/ai";
import num1 from "../../assets/2.8.png";
import pic from "../../assets/pic.png";
import chart from "../../assets/chart.png";
import { BiComment } from "react-icons/bi";

const DashBody = () => {
  return (
    <div className="dashbody__container">
      <div className="dashbody__con">
        <div className="dashbody__head">
          <div className="dashbody__text">
            <h1>Welcome, Kamsi</h1>
            <div className="dashbody__text__p">
              <p>Quite personalised for your site type: Portfolio</p>
              <HiPencil />_
            </div>
          </div>
          <div className="dashbody__buttons">
            <div className="dashbody__button">
              <p>Site Action</p>
              <AiOutlineDown />
            </div>
            <div className="dashbody__button">
              <HiPencil />_<p>Design Site</p>
            </div>
          </div>
        </div>

        <div className="dashbody__body">
          <div className="com1">
            <div className="com1__sec1">
              <p className="sec__name">Free Plan</p>
              <p className="sec__value">Compare Plans</p>
            </div>
            <div className="vr1"></div>
            <div className="com1__sec2">
              <p className="sec__name">Not connected</p>
              <p className="sec__value">Connect Your Own Domain</p>
            </div>
            <div className="vr1"></div>
            <div className="com1__sec3">
              <p className="sec__name">No Business Email</p>
              <p className="sec__value">Get a Business Email</p>
            </div>
          </div>

          <div className="com2">
            <div className="com2__sec1">
              <img src={num1} className="num1" alt="" />
              <p>Lets set up your portfolio</p>
            </div>
            <div className="com2__sec2">
              <div className="com2__box">Connect a custom domain</div>
              <div className="com2__box">Create your portfolio</div>
              <div className="com2__box">Customise site</div>
              <div className="com2__box">Get started on Google</div>
            </div>
          </div>

          <div className="com3">
            <div className="com3__head">
              <h1>Current Progress,</h1>
              <p>Checkout your latest projects and their progress.</p>
            </div>

            <div className="com3__body">
              <div className="com3__boxes">
                <div className="com3__box">
                  <div className="com3__left">
                    <img src={pic} alt="" />
                    <div className="com3__text">
                      <h1>Project Title</h1>
                      <p>Design and Development</p>
                    </div>
                  </div>
                  <div className="com3__right">
                    <div className="com3__comments">
                      <p>Last updated Today at 6:30am</p>
                      <BiComment /> 764
                    </div>
                    <div className="com3__loader">
                      <span className="span1"></span>
                      <span className="span2"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="com4">
            <div className="com4__head">
              <h1>Overall Progress</h1>
              <p>Status measuring</p>
            </div>
            <div className="com4__chart">
              <img src={chart} className="chart" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="dashbody__tail">
        <p>Upgrade to Connect Your Domain</p>
        <div className="dashbody__button">Upgrade Now</div>
      </div>
    </div>
  );
};

export default DashBody;
