import React from "react";
import "../Pages.css";
import "../MediaQueries.css";
import { Link } from "react-router-dom";

const ForgotLogin = () => {
  return (
    <>
      <main>
        <section className="section-container">
          <div className="content-wrapper">
            <h1 className="h1-title">HAVING TROUBLE SIGNING IN?</h1>
            <p className="contact-paragraph">
              To reset your password, please enter the email address associated
              with this account.
            </p>
          </div>

          {/* Message Form */}
          <form>
            <div className="form-fields">
              {/* Email */}
              <div className="form-details">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>

              {/* Remembered Login */}
              <div className="form-link">
                <span>
                  Remembered your login?
                  <Link to="/login" className="login">
                    Login
                  </Link>
                </span>
              </div>

              {/* Submit Button */}
              <div className="form-submit">
                <button className="btn" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default ForgotLogin;
