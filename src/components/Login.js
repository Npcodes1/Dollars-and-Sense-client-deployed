import React from "react";
import "../Pages.css";
import "../MediaQueries.css";
import { useNavigate, Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

const url = "http://localhost:8080";

const Login = ({ user, setUser, googleClientId }) => {
  //To navigate to other pages
  const navigate = useNavigate();

  const handleLoginForm = (e) => {
    //prevent default refreshing
    e.preventDefault();

    //use body variable to hold data that's submitted
    // const body = {
    //   username: e.target.username.value,
    //   password: e.target.password.value,
    // };

    //print the value of each input using its name attribute
    // console.log(body.username);
    // console.log(body.password);

    //need to send/post the data to the backend
    fetch(`${url}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())

      .then((result) => {
        if (result.statusCode === 200) {
          console.log(result);
          localStorage.setItem("user", JSON.stringify(result));
          alert("You've successfully logged in!");
          navigate("/admin");
        } else {
          throw new Error(result.error.message);
        }
      })
      .catch((error) => {
        navigate("/");
        console.log(error);
      });
  };

  // Google Auth
  // useEffect(() => {
  //   fetch(`${url}/api/auth/google`, {
  //     method: "GET",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       if (result.statusCode === 200) {
  //         console.log(result.data);
  //         localStorage.setItem("user", JSON.stringify(result.data));
  //         navigate("/");
  //       } else {
  //         throw new Error(result.error.message);
  //       }
  //     })
  //     .catch((error) => console.log(error));
  // });

  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

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
  //       if (result.statusCode === 200) {
  //         console.log(result);
  //         navigate("/");
  //       } else {
  //         throw new Error(result.error.message);
  //       }
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
                <label htmlFor="loginUsername">Username:</label>
                <input
                  type="text"
                  name="loginUsername"
                  id="loginUsername"
                  placeholder="Username"
                  onChange={(e) => console.log(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div className="form-details">
                <label htmlFor="loginPassword">Password:</label>
                <input
                  type="password"
                  name="loginPassword"
                  id="loginPassword"
                  onChange={(e) => console.log(e.target.value)}
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

              <GoogleLogin
                className="googleLogin"
                clientId={googleClientId}
                onSuccess={responseMessage}
                onError={errorMessage}
              />

              {/* <button type="button" onClick={handleGitHubAuth}>
                Sign in with GitHub
              </button>  */}

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
