import React from "react";
import success from "../assets/colour-reg.png";
import { useNavigate } from "react-router-dom";

const SuccessfulReg = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section class="container forms">
        <div class="form signup">
          <div class="form-content">
            <img
              src={success}
              alt="email picture"
              class="email-img"
              width="190PX"
              height="190PX"
            />
            <header>
              Successful Registration!
              <p>
                Your registration is completed. You can proceed to set up a
                Profile.
              </p>
            </header>
          </div>
          <div class="field button-field">
            <button onClick={() => navigate("/login")}>
              CONTINUE TO PROFILE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessfulReg;
