import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import "./DashHead.css";

const DashHead = () => {
  return (
    <div className="dashhead__con">
      <div className="dashhead__left">
        <div className="close__div">
          <div className="close">
            <AiOutlineClose className="close__icon" />
          </div>

          <p>Maisout</p>
        </div>

        <div className="dash__links">
          <div className="dash__link active__link">
            <p>My Site</p>
            <AiOutlineDown />
          </div>

          <div className="dash__link">
            <p>Explore</p>
            <AiOutlineDown />
          </div>

          <div className="dash__link">
            <p>Help</p>
            <AiOutlineDown />
          </div>

          <div className="dash__link upgrade">
            <p>Upgrade</p>
          </div>
        </div>
      </div>
      <div className="dashhead__right">
        <div className="dash__com">
          <div className="dash__search">
            <input placeholder="🔎 Search..." type="text" />
          </div>
          <BiComment />
          <BsBell />
        </div>
        <div className="vr"></div>
        <div className="dash__profile">
          <CgProfile className="profile__pic" />
          <AiOutlineDown className="profile__down" />
        </div>
      </div>
    </div>
  );
};

export default DashHead;
