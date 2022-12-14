import React from "react";
import "./Price.css";

const Price = () => {
  return (
    <div className="price__con">
      <h1>Simple transparent pricing</h1>
      <div className="price__cards">
        <div className="price__card">
          <div className="price__title">
            <p className="type">BASIC</p>
            <p className="price">$4.50</p>
          </div>
          <div className="price__info">
            <div className="info">
              <p className="sub">Storage </p>
              <p className="value">500MB</p>
            </div>
            <div className="info">
              <p className="sub">Customer care </p>
              <p className="value"> 24HRS</p>
            </div>
            <div className="info">
              <p className="sub">Bandwidth </p>
              <p className="value">1GB</p>
            </div>
            <div className="info">
              <p className="sub">Custom Domain </p>
              <p className="value"></p>
            </div>
          </div>
          <div className="price__start__button">Get Started</div>
        </div>

        <div className="price__card">
          <div className="price__title">
            <p className="type">STANDARD</p>
            <p className="price">$8.50</p>
          </div>
          <div className="price__info">
            <div className="info">
              <p className="sub">Storage </p>
              <p className="value">3GB</p>
            </div>
            <div className="info">
              <p className="sub">Customer care </p>
              <p className="value"> 24HRS</p>
            </div>
            <div className="info">
              <p className="sub">Video hours </p>
              <p className="value">30 MIN</p>
            </div>
            <div className="info">
              <p className="sub">Bandwidth </p>
              <p className="value">2GB</p>
            </div>
            <div className="info">
              <p className="sub">Custom Domain </p>
              <p className="value"></p>
            </div>
            <div className="info">
              <p className="sub">Free domain (1 year) </p>
              <p className="value"></p>
            </div>
          </div>
          <div className="price__start__button">Get Started</div>
        </div>

        <div className="price__card">
          <div className="price__title">
            <p className="type">PREMIUM</p>
            <p className="price">$8.50</p>
          </div>
          <div className="price__info">
            <div className="info">
              <p className="sub">Storage </p>
              <p className="value">3GB</p>
            </div>
            <div className="info">
              <p className="sub">Customer care </p>
              <p className="value"> 24HRS</p>
            </div>
            <div className="info">
              <p className="sub">Video hours </p>
              <p className="value">30 MIN</p>
            </div>
            <div className="info">
              <p className="sub">Bandwidth </p>
              <p className="value">2GB</p>
            </div>
            <div className="info">
              <p className="sub">Custom Domain </p>
              <p className="value"></p>
            </div>
            <div className="info">
              <p className="sub">Free domain (1 year) </p>
              <p className="value"></p>
            </div>
            <div className="info">
              <p className="sub">Social media logo files</p>
              <p className="value"></p>
            </div>
          </div>
          <div className="price__start__button">Get Started</div>
        </div>
      </div>
    </div>
  );
};

export default Price;
