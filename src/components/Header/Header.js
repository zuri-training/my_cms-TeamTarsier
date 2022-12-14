import React from "react";
import logo from "../../assets/logo.png";
import "./Header.css";
import { AiOutlineDown } from "react-icons/ai";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header__con">
      <div className="header__left">
        <div className="logo__div">
          <img src={logo} className="logo" />
        </div>
        <div className="nav__links">
          <div className="nav__link">
            <p>Features</p>
            <AiOutlineDown className="down" />
          </div>
          <div className="nav__link">
            <p>Learn</p>
            <AiOutlineDown className="down" />
          </div>
          <div className="nav__link">
            <p>Community</p>
            <AiOutlineDown className="down" />
          </div>
          <div className="nav__link">
            <p>Pricing</p>
            <AiOutlineDown className="down" />
          </div>
        </div>
      </div>
      <div className="header__right">
        <div className="login__button">
          <p onClick={() => navigate("login")}>Log in</p>
        </div>

        <div className="signup__button">
          <p onClick={() => navigate("signup")}>Sign Up</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
