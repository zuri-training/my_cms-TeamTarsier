import React from "react";
import pic1 from "../assets/Illustration-sign-up.png";
import facebook from "../assets/path14.png";
import google from "../assets/Social.png";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="signup">
      <section class="container forms">
        <div class="image">
          <img src={pic1} alt="illusttration" width="427.95px" height="374px" />
        </div>
        <div class="form signup">
          <div class="form-content">
            <header>
              Welcome
              <p>Please fill in your details</p>
            </header>

            <form action="">
              <div class="field input-field">
                <label for="Username">Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  class="input"
                  required
                />
              </div>

              <div class="field input-field">
                <label for="Email">Email address</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  class="input"
                  required
                />
              </div>

              <div class="field input-field">
                <label for="Password">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  class="input"
                  required
                />
                <i class="bx bxs-hide eye-icon"></i>
              </div>

              <div class="field button-field">
                <button onClick={() => navigate("/successfulReg")}>
                  SIGN UP
                </button>
              </div>

              <div class="form-link">
                <span>
                  Already have an account?
                  <a onClick={() => navigate("/login")} class="login-link">
                    Login
                  </a>
                </span>
              </div>
            </form>
          </div>

          <div class="line"></div>

          <div class="media-options">
            <a href="#" class="field facebook">
              <img src={facebook} alt="" class="facebook facebook-img" />
              <span>SIGN UP WITH FACEBOOK</span>
            </a>
          </div>

          <div class="media-options">
            <a href="#" class="field google">
              <img src={google} alt="" class="google-img" />
              <span>SIGN UP WITH GOOGLE</span>
            </a>
          </div>

          <div class="t-c">
            <span>
              By clicking sign up you agree to our
              <a href="">Terms & Condition</a>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
