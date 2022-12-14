import React from "react";
import email from "../assets/email with encrypted password.png";
import { useNavigate } from "react-router-dom";

const EmailSent = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section class="container forms">
        <div class="form signup">
          <div class="form-content">
            <header>
              Email has been sent!
              <p>
                An Otp has been sent to your e-mail box, please verify your
                E-mail.
              </p>
            </header>
            <img src={email} alt="email picture" class="email-img" />
          </div>
          <div class="field button-field">
            <button onClick={() => navigate("/enterOtp")}>
              OPEN YOUR MAIL
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmailSent;
