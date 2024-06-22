import React from "react";

import "../Pages.css";
import "../MediaQueries.css";

const url = "http://localhost:8080";

const Contact = () => {
  const handleContactForm = (e) => {
    // e.preventDefault(); //to test that the console logs are working
    //print message that the form submitted
    console.log("The form is working!", e.target.value);

    //create sends variable to hold the submitted sign up form information
    const body = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    // //print values in console to check it's working
    console.log(body);

    //connect to backend to post data
    fetch(`${url}/api/contact/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Your form has been successfully submitted!");
        console.log(result.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <main>
        <section className="section-container">
          <div className="content-wrapper">
            <h2 className="h2-title">GET IN TOUCH</h2>
            <p>
              For any questions, comments, or concerns, please don't hesitate to
              reach out! I'd love to hear from you and I'll respond as soon as I
              can. Thank you!
            </p>
          </div>

          {/* Message Form */}
          <form onSubmit={handleContactForm}>
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
                <label htmlFor="contactEmail">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>

              {/* Message Box */}
              <div className="form-details">
                <label htmlFor="message">Message: </label>
                <textarea
                  name="message"
                  id="message"
                  cols="40"
                  rows="10"
                  placeholder="Message"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="form-submit">
                <button className="btn" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default Contact;
