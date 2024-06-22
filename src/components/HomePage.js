import React from "react";

import "../Pages.css";
import "../MediaQueries.css";
import Quiz from "./Quiz";
import PieChart from "./PieChart";

const HomePage = () => {
  return (
    <>
      <main>
        <section className="section-container">
          <div className="content-wrapper">
            <h1 className="h1-title">DOLLAR$ & $EN$E</h1>
            <p>
              Welcome to DOLLAR$ & $EN$E- a housing financial tracker aimed
              specifically for helping you make sense of where your dollars are
              going and where they need to be! Learn more about managing your
              money in a efficient way to save for a down-payment on a house!
            </p>
            <p>Did you know???</p>
            <ul>
              <li>
                Due to several factors, such as economy, location, race/gender,
                interest rates, jobs, and supply and demand, the housing market
                has made it near impossible for some people to buy a house on
                their own.
              </li>
              <li>
                In general, about 81% of home buyers are Caucasian, 7%
                Hispanic/Latinx, 7% Black/African American, 6% Asian/Pacific
                Islander, and 6% identified as some other race.
                {/* Information source link */}[
                <a
                  href="https://www.nar.realtor/research-and-statistics/research-reports/highlights-from-the-profile-of-home-buyers-and-sellers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  1
                </a>
                ]
              </li>
              <li>
                The median age of first time-home buyers was 33 years old in
                2021.
                {/* Information source link */}[
                <a
                  href="https://www.nar.realtor/research-and-statistics/research-reports/highlights-from-the-profile-of-home-buyers-and-sellers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  1
                </a>
                ]
              </li>
              <li>
                Now that age has risen to 36 years old.
                {/* Information source link */}[
                <a
                  href="https://www.nar.realtor/research-and-statistics/research-reports/highlights-from-the-profile-of-home-buyers-and-sellers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  1
                </a>
                ]
              </li>
            </ul>
            {/* To add the pie chart to the page. It's wrapped in a div container for responsiveness. */}
            <PieChart />
            <p>
              Our goal is aimed to providing helpful resources that will aid
              first-time minority buyers learn financial literacy for when it
              comes time for them to start looking for houses.
            </p>
            <p>
              Start your journey today by taking the quiz below to see if this
              website is for you!
            </p>
            <hr />

            {/* Quiz */}
            <h3 className="h3-title">WONDERING IF THIS SITE IS FOR YOU?</h3>
            <h4 className="h4-title">TAKE THE QUIZ AND FIND OUT!</h4>
            <Quiz />
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
