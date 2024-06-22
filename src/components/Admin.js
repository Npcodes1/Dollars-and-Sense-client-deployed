import React, { useState, useEffect } from "react";
import "../Pages.css";
import "../MediaQueries.css";
import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const url = "http://localhost:8080";

const Admin = () => {
  const navigate = useNavigate();
  // const { userId, messageId } = useParams();

  // to hold data for users. Initial state is an empty array
  const [getUsers, setGetUsers] = useState([{}]);

  //to hold data for messages sent from contact form. Initial state is an empty array
  const [getMessages, setGetMessages] = useState([{}]);

  //useEffect to use setter function for users imported from signUp data
  useEffect(() => {
    //Get Request to get all users
    fetch(`${url}/auth/admin/users`, {
      method: "GET",
    })
      //if successful, show the users and if not, show an error
      .then((response) => response.json()) //to convert response into json
      .then((result) => {
        console.log(result); //print converted result to console
        setGetUsers(result.data);
        navigate("/admin");
      })
      .catch((error) => console.log("Request failed", error));
  }, [navigate]);

  //useEffect to use setter function for users imported from messages data
  useEffect(() => {
    //Get Request to get all users
    fetch(`${url}/auth/admin/messages`, {
      method: "GET",
    })
      //if successful, show the users and if not, show an error
      .then((response) => response.json()) //to convert response into json
      .then((result) => {
        console.log(result); //print converted result to console
        setGetMessages(result.data);
        navigate("/admin");
      })
      .catch((error) => console.log("Request failed", error));
  }, [navigate]);

  // //To delete User
  // const handleDeleteUser = () => {
  //   fetch(`${url}/auth/admin/users/delete/${userId}`, {
  //     method: "DELETE",
  //   })
  //     .then((response) => response.json())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log(error));
  // };

  // //To delete Message
  // const handleDeleteMessage = () => {
  //   fetch(`${url}/auth/messages/delete/${messageId}`, {
  //     method: "DELETE",
  //   })
  //     .then((response) => response.json())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log(error));
  // };

  return (
    <>
      <main>
        <section className="section-container margin-space">
          <h1 className="h1-title">ADMIN ACCESS</h1>
        </section>
        <section className="section-container">
          <div className="content-wrapper">
            {/* Signed up Users Data */}
            <h2>Users</h2>
            <hr />
            <table className="table">
              <div className="table-style">
                <thead className="table-heading">
                  <tr>
                    <th>FIRST NAME</th>
                    <th>LAST NAME</th>
                    <th>EMAIL</th>
                    <th>USERNAME</th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  {getUsers.map((getUser) => {
                    return (
                      <tr className="table-row" key={getUser.id}>
                        <td>{getUser.firstName}</td>
                        <td>{getUser.lastName}</td>
                        <td>{getUser.email}</td>
                        <td>{getUser.username}</td>
                        {/* <td>
                        <button
                          type="button"
                          onClick={() => handleDeleteUser(userId)}
                        >
                          <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                      </td> */}
                      </tr>
                    );
                  })}
                </tbody>
              </div>
            </table>
          </div>
        </section>

        {/* Section for Messages from Contact Form */}
        <section className="section-container">
          <div className="content-wrapper">
            {/* Messages Data */}
            <h2>Messages</h2>
            <hr />
            <table className="table">
              <div className="table-style">
                <thead className="table-heading">
                  <tr>
                    <th>FIRST NAME</th>
                    <th>LAST NAME</th>
                    <th>EMAIL</th>
                    <th>MESSAGE</th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  {getMessages.map((getMessage) => {
                    return (
                      <tr className="table-row" key={getMessage.id}>
                        <td>{getMessage.firstName}</td>
                        <td>{getMessage.lastName}</td>
                        <td>{getMessage.email}</td>
                        <td>{getMessage.message}</td>
                        {/* <td>
                        <button onClick={handleDeleteMessage}>
                          <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                      </td> */}
                      </tr>
                    );
                  })}
                </tbody>
              </div>
            </table>
          </div>
        </section>
      </main>
    </>
  );
};

export default Admin;
