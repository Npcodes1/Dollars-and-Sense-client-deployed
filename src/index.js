import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const googleClientId =
  "601439240620-5fflt465ga9qfd7rft1h1cavr4no815g.apps.googleusercontent.com";
root.render(
  <GoogleOAuthProvider clientId={googleClientId} scope="profile email">
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
