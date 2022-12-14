import React from "react";
import { useNavigate } from "react-router-dom";

const CreateNewPassword = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section class="container forms">
        <div class="form signup">
          <div class="form-content">
            <header>
              Create New Pasword?
              <p>Your new password must be different from your old password</p>
            </header>

            <form action="">
              <div class="field input-field">
                <label for="password">New Password</label>
                <input
                  type="password"
                  placeholder="New Password"
                  class="input"
                  required
                />
              </div>

              <div class="field input-field">
                <label for="password">Confirm New Password</label>
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  class="input"
                  required
                />
              </div>

              <div class="field button-field">
                <button onClick={() => navigate("/login")}>
                  CHANGE PASSWORD
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateNewPassword;
