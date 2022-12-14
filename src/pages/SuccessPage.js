import React, { useState } from "react";
import "./styles/SuccessPage.css";
import success from "../assets/success.png";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();
  const [successModal, setSuccessModal] = useState("modal-container");

  return (
    <div className="success__con">
      <div className={successModal}>
        <section class="modal">
          <header class="modal-header">
            <div className="modal__info"></div>
          </header>
          <div class="modal-content">
            <div className="content">
              <div className="success__img__div">
                <img src={success} className="success__img" />
              </div>
              <div className="success__h1__div">
                <h1 className="success__h1">Start setting up your website.</h1>
              </div>
              <div className="success__text">
                <p>
                  Set up your profile, manage your apps, site settings,
                  analytics communication and more.{" "}
                </p>
                <div className="success__buttons">
                  <div className="success__button">
                    <p onClick={() => navigate("/dash")}>Go to Dashboard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SuccessPage;
