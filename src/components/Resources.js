import React from "react";
import { Link } from "react-router-dom";
import "../Pages.css";
import "../MediaQueries.css";

const Resources = () => {
  return (
    <>
      <main>
        <section className="section-container">
          <div className="content-wrapper">
            <h1 className="h1-title">RESOURCES</h1>
            {/* Down payment Assistance */}
            <h2 className="h2-centered">Down Payment Assistance</h2>
            <div className="resource-link">
              <Link
                to="https://www.naca.com/purchase/"
                target="_blank"
                rel="noopener noreferrer"
              >
                NACA
              </Link>
            </div>
            <div className="resource-link">
              <Link
                to="https://www.forbes.com/advisor/mortgages/down-payment-assistance-by-state/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Down Payment Assistance by State
              </Link>
            </div>
            <div className="resource-link">
              <Link
                to="https://www.cnbc.com/2022/09/01/bank-of-america-to-help-minorities-buy-first-homes-with-new-mortgages.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bank of America to Help Minorities Buy First Homes with New
                Mortgages
              </Link>
            </div>

            {/* Loan Programs */}
            <h2 className="h2-centered">Loan Programs</h2>
            <div className="resource-link">
              <Link
                to="https://www.zillow.com/learn/first-time-buyer-loan-programs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                First Time Buyer Loan Programs
              </Link>
            </div>
            <div className="resource-link">
              <Link
                to="https://www.homelight.com/blog/buyer-home-loan-programs-minorities-low-income/"
                target="_blank"
                rel="noopener noreferrer"
              >
                16 Loan Programs for Low-income and Minority Home-buyers
              </Link>
            </div>

            {/* Grant Programs */}
            <h2 className="h2-centered">Grant Programs</h2>
            <div className="resource-link">
              <Link
                to="https://homebuyer.com/learn/first-time-home-buyer-grants-programs"
                target="_blank"
                rel="noopener noreferrer"
              >
                First Time Buyer Grant Programs
              </Link>
            </div>
            <div className="resource-link">
              <Link
                to="https://www.bankofamerica.com/mortgage/affordable-housing-programs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Affordable Housing Programs
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Resources;
