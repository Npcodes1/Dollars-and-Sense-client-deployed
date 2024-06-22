import React, { useState } from "react";
import "../Quiz.css";
import "../Pages.css";
import "../MediaQueries.css";

const Quiz = () => {
  //To keep score. Initial score is 0.
  const [score, setScore] = useState(0);

  //To score each answer. Yes => +1 and No => +0
  const calculateAnswers = () => {
    const inputAnswers = document.querySelectorAll(".answer");
    //reset score for each input selected so it's not adding on to the previous one.
    let newScore = 0;
    //for loop to score input that user selects based on if it's yes or no
    for (let i = 0; i < inputAnswers.length; i++) {
      if (inputAnswers[i].checked && inputAnswers[i].value === "yes") {
        console.log(inputAnswers[i].value);
        setScore((newScore += 1));
      } else if (inputAnswers[i].checked && inputAnswers[i].value === "no") {
        console.log(inputAnswers[i].value);
        setScore(newScore + 0);
      }
    }
    console.log(`The final score is ${newScore}.`);
    setScore(newScore);
  };

  // To submit for results
  const handleGetFinalResult = (e) => {
    console.log(score);
    e.preventDefault(); //prevent refreshing of page

    let message = document.querySelector("#quiz-results");

    console.log(message); //check it's getting the result

    //If <= 2 = site not for you. If >= 2, site is for you.
    if (score >= 2) {
      message.textContent = "This is exactly where you need to be! Welcome!";
    } else if (score < 2 && score >= 0) {
      message.textContent =
        "Sorry, this website will not benefit you. But feel free to look around anyways!";
    } else {
      console.warn("Quiz is not working!");
    }
  };

  //To clear quiz
  const handleClear = () => {
    console.log("The score has been reset.");
    document.querySelector(".form").reset(); //to clear form
    document.querySelector("#quiz-results").textContent = ""; //clear message from page
    setScore(score);
  };

  return (
    <>
      <form className="form" onSubmit={handleGetFinalResult}>
        <div className="form-questions-wrapper">
          <ol>
            <li>
              Are you a minority that wants to buy a house someday?
              <div className="quiz-content">
                <input
                  type="radio"
                  className="answer"
                  name="question1"
                  value="yes"
                  onChange={calculateAnswers}
                  required
                />
                <label>Yes</label>
                <input
                  type="radio"
                  className="answer"
                  name="question1"
                  value="no"
                  onChange={calculateAnswers}
                  required
                />
                <label>No</label>
              </div>
            </li>
            <li>
              Can you currently afford to buy a house?
              <div className="quiz-content">
                <input
                  type="radio"
                  className="answer"
                  name="question2"
                  value="yes"
                  onChange={calculateAnswers}
                  required
                />
                <label>Yes</label>
                <input
                  type="radio"
                  className="answer"
                  name="question2"
                  value="no"
                  onChange={calculateAnswers}
                  required
                />
                <label>No</label>
              </div>
            </li>
            <li>
              Are you struggling with budgeting and saving?
              <div className="quiz-content">
                <input
                  type="radio"
                  className="answer"
                  name="question3"
                  value="yes"
                  onChange={calculateAnswers}
                  required
                />
                <label>Yes</label>
                <input
                  type="radio"
                  className="answer"
                  name="question3"
                  value="no"
                  onChange={calculateAnswers}
                  required
                />
                <label>No</label>
              </div>
            </li>
          </ol>
          {/* Submit Button */}
          <div className="form-submit-quiz">
            <button className="form-btn btn" type="submit">
              Submit
            </button>
            <button
              className="form-btn clear-btn btn"
              type="button"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
          <p id="quiz-results"></p>
        </div>
      </form>
    </>
  );
};

export default Quiz;
