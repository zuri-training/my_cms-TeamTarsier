import React from "react";
import "./styles/style.css";
import pic1 from "../assets/Illustration-login.png";
import facebook from "../assets/path14.png";
import google from "../assets/logo googleg 48dp.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div classNameName="login">
      <section className="container forms">
        <div className="image">
          <img src={pic1} alt="illusttration" width="427.95px" height="374px" />
        </div>
        <div className="form signup">
          <div className="form-content">
            <header>
              HELLO AGAIN !<p>Please enter your details</p>
            </header>

            <form action="">
              <div className="field input-field">
                <label for="Email">Email address</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="input"
                  required
                />
              </div>

              <div className="field input-field">
                <label for="Password">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input"
                  required
                />
                <i className="bx bxs-hide eye-icon"></i>
              </div>

              <div className="field button-field">
                <button onClick={() => navigate("/successPage")}>LOG IN</button>
              </div>

              <div className="remfor">
                <div className="rem">
                  <input type="checkbox" />
                  <label for="rememberme">Remember me</label>
                </div>
                <div>
                  <a onClick={() => navigate("/forgotPass")}>
                    Forgot password?
                  </a>
                </div>
              </div>

              <div className="form-link">
                <span>
                  Don't have an account?
                  <a onClick={() => navigate("/signup")} className="login-link">
                    Sign up
                  </a>
                </span>
              </div>
            </form>
          </div>

          <div className="line"></div>

          <div className="media-options">
            <a href="#" className="field google">
              <img
                src={google}
                alt=""
                className="google-img"
                width="20px"
                height="20px"
              />
              <span>LOG IN WITH GOOGLE</span>
            </a>
          </div>

          <div className="media-options">
            <a href="#" className="field facebook">
              <img
                src={facebook}
                alt=""
                className="facebook facebook-img"
                width="20px"
                height="20px"
              />
              <span>LOG IN WITH FACEBOOK</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
