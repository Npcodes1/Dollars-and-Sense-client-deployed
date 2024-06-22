import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Pages.css";
import "../MediaQueries.css";

const url = "http://localhost:8080";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleErrorRedirect = () => {
    //connect to backend to post data
    fetch(`${url}/login/local/failed`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <section className="section-container">
        <div className="content-wrapper">
          <h1 className="page-error">
            Oh no! Page Could Not Be Found. Please Try Again Later.
          </h1>
          <img
            className="page-error-img"
            src="./img/page-not-found.jpg"
            alt="Sad puppy with a error requesting page method."
          />
          <div className="page-error-btn">
            <Link to="/login/local/failed">
              <button
                className="btn"
                type="button"
                onClick={handleErrorRedirect}
              >
                Return Home
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageNotFound;
