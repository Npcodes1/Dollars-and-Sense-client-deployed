import React from "react";
import "../Pages.css";
import "../MediaQueries.css";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:8080";

const Signup = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleSignupForm = (e) => {
    // e.preventDefault(); //to test that the console logs are working
    //print message that the form submitted
    console.log("The form is working!");

    //create body variable to hold the submitted sign up form information
    const body = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      username: e.target.username.value,
      password: e.target.password.value,
    };

    //print values in console to check it's working
    console.log(body);

    //connect to backend to post data
    fetch(`${url}/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setUser(user);
        localStorage.setItem("user", JSON.stringify(result.data));
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <section className="section-container">
        <div className="content-wrapper">
          <h2 className="h2-title">SIGN UP</h2>
        </div>

        {/* Sign Up Form */}
        <form onSubmit={handleSignupForm}>
          <div className="form-fields">
            {/* First Name */}
            <div className="form-details">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                required
              />
            </div>
            {/* Last Name */}
            <div className="form-details">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                required
              />
            </div>
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
            {/* Phone Number */}
            {/* <div className="form-details">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Phone Number"
                required
              />
            </div> */}
            {/* Username */}
            <div className="form-details">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                required
              />
            </div>
            {/* Password */}
            <div className="form-details">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            {/* Submit Button */}
            <div className="form-submit">
              <button className="btn" type="submit">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Signup;
