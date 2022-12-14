import React from "react";
import "./Footer.css";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import google from "../../assets/google.png";

const Footer = () => {
  return (
    <div className="footer__con">
      <div className="footer__content">
        <div className="footer__top">
          <div className="footer__links__div">
            <div className="footer__links">
              <div className="footer__link__h1">Product</div>
              <div className="footer__link">Websites</div>
              <div className="footer__link">Online stores</div>
              <div className="footer__link">Marketing</div>
              <div className="footer__link">Features</div>
              <div className="footer__link">Pricing</div>
            </div>

            <div className="footer__links">
              <div className="footer__link__h1">Company</div>
              <div className="footer__link">About</div>
              <div className="footer__link">Contact Us</div>
              <div className="footer__link">Press & media</div>
              <div className="footer__link">Careers</div>
            </div>

            <div className="footer__links">
              <div className="footer__link__h1">Resources</div>
              <div className="footer__link">Blog</div>
              <div className="footer__link">Inspiration center</div>
              <div className="footer__link">Developer Docs</div>
            </div>

            <div className="footer__links">
              <div className="footer__link__h1">Partners</div>
              <div className="footer__link">Designer</div>
              <div className="footer__link">Education</div>
              <div className="footer__link">Affiliates</div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>Connect with us</p>
          <div className="socials">
            <div className="social">
              <img src={facebook} alt="" />
            </div>
            <div className="social">
              <img src={youtube} alt="" />
            </div>
            <div className="social">
              <img src={google} alt="" />
            </div>
          </div>
          <div className="last__links">
            <div className="quicks">
              <p>Legal</p>
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
              <p>Cookie Settings</p>
              <p>Dispute Policy</p>
              <p>Do Not Sell My Personal Information</p>
            </div>
            <div className="copyright">Copyright 2022 My_CMS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
