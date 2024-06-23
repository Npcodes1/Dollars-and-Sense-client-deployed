import React from "react";
import "../Pages.css";
import "../MediaQueries.css";

const CreditScore = () => {
  return (
    <>
      <main>
        <section className="section-container margin-space">
          <div className="content-wrapper">
            <h1 className="h1-title">WHAT IS A CREDIT SCORE?</h1>
            <p className="content-paragraph">
              A credit score is a three-digit number that is given to understand
              how good a person's credit is. Typically, these numbers run from
              300 to 850 and lenders, such as banks or financial companies, use
              this to understand how risky it is to lend someone money or issue
              them credit.
            </p>
            <p className="content-paragraph">
              Credit scores are important because the lower the credit score,
              the riskier the person is considered as a borrower, and the more
              unlikely they'll be given financial assistance. This could result
              in being disqualified from getting a new loan or mortgage, and
              could only leave high-interest rate options.
            </p>
            <h2 className="h2-title">
              WHAT ARE THE FACTORS REGARDING CREDIT SCORES?
            </h2>
            <p className="content-paragraph">
              There are several factors that are taken into consideration when a
              credit score is calculated. These include:
              <ul className="content-list">
                <li>
                  Payment history and how often on-time payments are made.
                </li>
                <li>
                  Any outstanding balances owed and the percentage of total
                  credit limit it accrues to.
                </li>
                <li>
                  The types of credit accounts, such as credit cards, mortgages,
                  car loans, and/or student loans.
                </li>
              </ul>
            </p>
            <h2 className="h2-title">HOW TO IMPROVE CREDIT SCORES?</h2>
            <p className="content-paragraph">
              The best way to improve your credit score is using the following
              methods:
              <ul>
                <li>Pay bills on time.</li>
                <ul>
                  <li>
                    Missed payments can harm your credit score and can stay on
                    your report for seven years if it goes to a collection
                    agency. Consider automatic bill pay if you struggle with
                    remembering bill deadlines.
                  </li>
                </ul>
                <li>Make sure credit card balances remain low.</li>
                <ul>
                  <li>
                    It's good practice to keep your utilization rate for your
                    credit card to below 30% of the overall limit.
                  </li>
                </ul>
                <li>Don't close old credit cards.</li>
                <ul>
                  <li>
                    Keeping old credit cards, even if you don't regularly use
                    them, can aid in showing a long credit history. However, be
                    sure to check that the cards don't have annual fees that can
                    harm you financially by keeping it open. Instead, consider
                    downgrading to a card with no annual fee by the same credit
                    card company.
                  </li>
                </ul>
                <li>Keep an eye on your credit report for errors.</li>
                <ul>
                  <li>
                    If you're a victim of identity fraud, disputing fraudulent
                    activity to the credit bureaus can help raise your score.
                  </li>
                </ul>
              </ul>
            </p>
            <h2 className="h2-title">HOW CAN I CHECK MY CREDIT SCORE?</h2>
            <p className="content-paragraph">
              There are many ways you can check your credit score. Your credit
              card company may include your recent score on your bill statements
              or on their website or app. You can also request a copy of your
              credit report from each of the 3 main credit bureaus once a year
              for free.
            </p>

            {/* Request a Credit Score */}
            <div className="credit-score-container">
              {/* Request Credit Score Button */}
              <div className="form-submit">
                <a
                  href="https://www.annualcreditreport.com/requestReport/landingPage.action"
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request Credit Report
                </a>
              </div>
              {/* Credit Score Img */}
              <div className="content-image-wrapper">
                <img
                  className="credit-progress"
                  src="./img/credit score.jpg"
                  alt="credit-score"
                />
              </div>
              {/* Cited Source */}
              <div className="resource-link">
                <a
                  href="https://www.fidelity.com/learning-center/smart-money/what-is-a-credit-score"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Information provided by Fidelity
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CreditScore;
