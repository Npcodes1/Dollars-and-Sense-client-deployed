import React /*{ useEffect }*/ from "react";
import "../Pages.css";
import "../MediaQueries.css";
import { useNavigate, Link } from "react-router-dom";
// import { GoogleLogin } from "@react-oauth/google";

const url = "http://localhost:8080";

// const googleClientId =
//   "601439240620-5fflt465ga9qfd7rft1h1cavr4no815g.apps.googleusercontent.com";

const Login = ({ user, setUser }) => {
  //To navigate to other pages
  const navigate = useNavigate();

  // const responseMessage = (response) => {
  //   console.log(response);
  // };
  // const errorMessage = (error) => {
  //   console.log(error);
  // };

  const handleLoginForm = (e) => {
    //prevent default refreshing
    e.preventDefault();

    //print success message
    console.log("The form is working!");

    //use body variable to hold data that's submitted
    const body = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    //print the value of each input using its name attribute
    console.log(body.username);
    console.log(body.password);

    //need to send/post the data to the backend
    fetch(`${url}/api/login/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())

      .then((result) => {
        console.log(result);
        localStorage.setItem("user", JSON.stringify(result.data));
        alert("You've successfully logged in!");
        navigate("/admin");
      })
      .catch((error) => {
        navigate("/");
        console.log(error);
      });
  };

  // // Google Authentication
  // useEffect(() => {
  //   fetch(`${url}/api/auth/google`, {
  //     method: "GET",
  //     headers: {
  //       // Authorization: `Bearer ${}`,
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result);
  //       navigate("/");
  //       setUser(user);
  //     })
  //     .catch((error) => console.log(error));
  // });

  // //Github Authentication
  // useEffect(() => {
  //   fetch(`${url}/api/auth/github`, {
  //     method: "GET",
  //     headers: {
  //       // Authorization: `Bearer ${}`,
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result);
  //       navigate("/");
  //       setUser(user);
  //     })
  //     .catch((error) => console.log(error));
  // });

  return (
    <>
      <main>
        <section className="section-container">
          <div className="content-wrapper">
            <h2 className="h2-title">LOGIN</h2>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLoginForm}>
            <div className="form-fields">
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

              <div className="admin">
                <Link to="/admin">ADMIN</Link>
              </div>

              {/* Submit Button */}
              <div className="form-submit">
                <button className="btn" type="submit">
                  Login
                </button>
              </div>
              {/* <GoogleLogin
                clientId={googleClientId}
                onSuccess={responseMessage}
                onError={errorMessage}
              />

              <button className="auth-btn" type="submit">
                Login with GitHub
              </button> */}

              {/* Forgot Username/Password */}
              {/* <div className="form-link">
                <span>
                  Already have an account but can't login?
                  <Link to="/forgot-login"> Forgot Username/Password</Link>
                </span>
              </div> */}
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default Login;
