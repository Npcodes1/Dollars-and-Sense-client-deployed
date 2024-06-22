import React from "react";
import "../Pages.css";
import "../MediaQueries.css";
import Login from "./Login";
import Signup from "./Signup";

const Profile = ({ user, setUser }) => {
  return (
    <>
      <main>
        <Login />
        <Signup />
      </main>
    </>
  );
};

export default Profile;
