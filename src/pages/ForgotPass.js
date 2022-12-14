import React from "react";
import { useNavigate } from "react-router-dom";

const ForgotPass = () => {
  const navigate = useNavigate();
  return (
    <div className="forgotPass">
      <section class="container forms">
        <div class="form signup">
          <div class="form-content">
            <header>
              Forgot your password?
              <p>Enter your email address and we will send you an OTP code</p>
            </header>

            <form action="">
              <div class="field input-field">
                <label for="Email">Email address</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  class="input"
                  required
                />
              </div>

              <div class="field button-field">
                <button onClick={() => navigate("/emailSent")}>
                  SEND OTP CODE
                </button>
              </div>
            </form>
          </div>

          <div class="t-c">
            <span>
              Remember your password?
              <a onClick={() => navigate("/login")}>Log in</a>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPass;
