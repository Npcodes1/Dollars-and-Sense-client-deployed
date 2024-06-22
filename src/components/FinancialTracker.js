import React, { useState } from "react";
import "../Pages.css";
import "../MediaQueries.css";

const url = "http://localhost:8080";

const FinancialTracker = () => {
  //To detect the changes in state
  const [budget, setBudget] = useState();
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState();
  const [note, setNote] = useState("");
  const [total, setTotal] = useState("");
  const [history, setHistory] = useState([]);

  //Add a new entry to history so there's a log of expenses.
  const addEntry = () => {
    const newEntry = {
      category: category,
      date: date,
      amount: amount,
      note: note,
    };

    history.push(newEntry);
    setHistory(history);
  };

  //clear form contents
  const handleFormReset = () => {
    setCategory("");
    setDate("");
    setAmount("");
    setNote("");
  };

  const handleCreateExpenses = (e) => {
    e.preventDefault(); //to double check everything is working before it refreshes
    setTotal(total); //setting the total
    // to tell whether it's income or expense
    if (category === "Income") {
      // if selected category is income, add amount to budget
      setBudget(parseInt(budget)); //set the budget
      setBudget(parseInt(budget) + parseInt(amount));
      setAmount(parseInt(amount));
      setTotal(setBudget + setAmount);
      // console.log(setTotal);
    } else {
      // if selected category is expense, subtract amount from budget
      setBudget(parseInt(budget) - parseInt(amount));
      setAmount(parseInt(amount));
      setTotal(setBudget - setAmount);
    }

    const body = {
      category: e.target.category.value,
      date: e.target.date.value,
      amount: e.target.amount.value,
      note: e.target.note.value,
    };

    // console.log(body);

    fetch(`${url}/financial/tracker/entry/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
        handleFormReset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <main>
        <section className="section-container">
          <div className="content-wrapper">
            <h1 className="h1-title">LET'S BUDGET!!</h1>
            <p className="budget-details">
              Use our easy-to-navigate expense tracker and add your expenses and
              income to learn how to better balance your funds.
            </p>
            <h2 className="h2-title left-colored-title">Transactions</h2>
            <form
              className="transactions-container"
              onSubmit={handleCreateExpenses}
            >
              <div className="input-container transactions">
                <div className="transactions">
                  <label htmlFor="budget">Enter Your Starting Budget: </label>
                  <input
                    type="number"
                    id="budget"
                    name="budget"
                    value={budget}
                    placeholder="$"
                    onChange={(e) => setBudget(e.target.value)}
                  />
                </div>
                <div className="category transactions">
                  <label htmlFor="category">Category: </label>
                  <select
                    id="category"
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  >
                    <option></option>
                    <option value="Income">Income</option>
                    <option value="Mortgage-Rent">Mortgage/Rent</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Insurance">Insurance</option>
                    <option value="Food">Food/Drinks</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Health-wellness">Health/Wellness</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                  </select>
                </div>

                {/* Date */}
                <div className="transactions">
                  <label htmlFor="date">Date: </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />

                  {/* Amount */}
                  <label htmlFor="amount">Amount: </label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={amount}
                    placeholder="$"
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />

                  {/* Notes */}
                  <label htmlFor="note">Note: </label>
                  <textarea
                    type="text"
                    id="note"
                    name="note"
                    value={note}
                    placeholder="Add a Note"
                    onChange={(e) => setNote(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="done-btn">
                  <button
                    id="add-transaction"
                    className="btn add-btn"
                    type="submit"
                    onClick={addEntry}
                  >
                    ADD
                  </button>
                </div>
              </div>
              <hr />
              <h2 className="h2-title left-colored-title">
                Your Total is: {""}
                <span onChange={(e) => setTotal(e.target.value)}>
                  ${budget}
                </span>
              </h2>
              <hr />
              {/* Expenses List */}
              <div className="expenses-list">
                <h2 className="h2-title left-colored-title history-title">
                  History
                </h2>
                <div className="history">
                  <ul className="history-list">
                    {history.map((item, key) => (
                      //to make sure to have a unique id when creating each list>
                      <li key={key}>
                        <div>
                          <span>Category:</span> {item.category}
                        </div>
                        <div>
                          <span>Date:</span> {item.date}
                        </div>
                        <div>
                          {" "}
                          <span>Amount:</span> ${item.amount}
                        </div>
                        <div>
                          <span>Note:</span> {item.note}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default FinancialTracker;
