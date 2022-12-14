import React from "react";
import { useNavigate } from "react-router-dom";

const EnterOtp = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section class="container forms">
        <div class="form signup">
          <div class="form-content">
            <header>
              Enter OTP Code
              <p>Type in the OTP code that was sent to your email</p>
            </header>
            <form
              method="get"
              class="digit-group"
              data-group-name="digits"
              data-autosubmit="false"
              autocomplete="off"
            >
              <input
                type="text"
                id="digit-1"
                name="digit-1"
                data-next="digit-2"
                class="code"
              />
              <input
                type="text"
                id="digit-2"
                name="digit-2"
                data-next="digit-3"
                data-previous="digit-1"
                class="code"
              />
              <input
                type="text"
                id="digit-3"
                name="digit-3"
                data-next="digit-4"
                data-previous="digit-2"
                class="code"
              />
              <span class="splitter">&ndash;</span>
              <input
                type="text"
                id="digit-4"
                name="digit-4"
                data-next="digit-5"
                data-previous="digit-3"
                class="code"
              />
              <input
                type="text"
                id="digit-5"
                name="digit-5"
                data-next="digit-6"
                data-previous="digit-4"
                class="code"
              />
              <input
                type="text"
                id="digit-6"
                name="digit-6"
                data-previous="digit-5"
                class="code"
              />
            </form>
          </div>

          <div class="field button-field">
            <button onClick={() => navigate("/createNewPass")}>
              Submit OTP
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnterOtp;
