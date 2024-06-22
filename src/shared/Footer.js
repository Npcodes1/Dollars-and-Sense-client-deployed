import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../Footer.css";
import "../MediaQueries.css";

function Footer() {
  // To add current year to copyright
  let currentYear = new Date().getFullYear();

  // For back to top button functionality
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer>
        <section className="footer-container">
          <div className="social-media">
            {/* Links to Contact Page */}
            <Link to="/contact">
              <h2 className="footer-h2-title">LET'S CONNECT!</h2>
            </Link>
            <ul className="footer-links">
              {/* GitHub */}
              <li>
                <Link
                  to="https://github.com/Npcodes1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </li>

              {/* LinkedIn */}
              <li>
                <Link
                  to="https://www.linkedin.com/in/nicolepayneswe/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </li>

              {/* Email */}
              <li>
                <Link to="mailto:nicole1rock@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Back to the Top Feature */}
          <div className="back-to-top" onClick={goToTop}>
            <FontAwesomeIcon icon={faCircleArrowUp} />
          </div>

          {/* Copyright */}
          <div className="copyright-wrapper">
            <span>
              Copyright &copy; Nicole Payne {currentYear}. All Rights Reserved.
            </span>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
