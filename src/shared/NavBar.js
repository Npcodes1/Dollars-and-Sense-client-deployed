import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../NavBar.css";
import "../MediaQueries.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCoins,
  faBuildingColumns,
  faBook,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const url = "http://localhost:8080";

function NavBar({ user, setUser }) {
  const navigate = useNavigate();
  const handleLogout = ({ user, setUser }) => {
    fetch(`${url}/logout`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result); //print success message
        setUser({}); //set user state to empty object
        localStorage.removeItem("user"); //remove user from localStorage
        alert("You've successfully logged out!");
        navigate("/"); //navigate back to home
      })
      .catch((error) => {
        console.log(error); //print error message
        navigate("/"); //navigate back to home
      });
  };
  return (
    <>
      <header className="top-header">
        {/* Logo */}
        <div className="logo-container">
          <Link to="/">
            <img src="./img/DOLLAR$ & $EN$E LOGO.png" alt="site-logo" />
          </Link>
        </div>

        {/* Navbar */}
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/tracker">FINANCIAL TRACKER</Link>
            </li>
            <li>
              <Link to="/credit-score">CREDIT SCORE</Link>
            </li>
            <li>
              <Link to="/resources">RESOURCES</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
            <li>
              {user.username ? (
                <>
                  <Link to="/admin">ADMIN</Link>
                  <Link to="" onClick={handleLogout}>
                    LOGOUT
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/profile">PROFILE</Link>
                </>
              )}
            </li>
          </ul>
        </nav>
      </header>

      {/* Bottom Navigation Bar- for mobile and tablet devices only */}
      <header className="bottom-header">
        <nav className="navbar-bottom">
          <Link to="/" className="nav-links-bottom">
            <FontAwesomeIcon icon={faHouse} />
            <span className="nav-text">Home</span>
          </Link>
          <Link to="/tracker" className="nav-links-bottom">
            <FontAwesomeIcon icon={faCoins} />
            <span className="nav-text">Financial Tracker</span>
          </Link>
          <Link to="/credit-score" className="nav-links-bottom">
            <FontAwesomeIcon icon={faBuildingColumns} />
            <span className="nav-text">Credit Score</span>
          </Link>
          <Link to="/resources" className="nav-links-bottom">
            <FontAwesomeIcon icon={faBook} />
            <span className="nav-text">Resources</span>
          </Link>
          <Link to="/profile" className="nav-links-bottom">
            <FontAwesomeIcon icon={faUser} />
            <span className="nav-text">Profile</span>
          </Link>
        </nav>
      </header>

      {/* Wave svg */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 40 1440 200">
        <path
          fill="#023b58"
          fill-opacity="1"
          d="M0,64L80,58.7C160,53,320,43,480,69.3C640,96,800,160,960,181.3C1120,203,1280,181,1360,170.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

export default NavBar;
