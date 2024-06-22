import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./shared/NavBar";
import HomePage from "./components/HomePage";
import FinancialTracker from "./components/FinancialTracker";
import CreditScore from "./components/CreditScore";
import Resources from "./components/Resources";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ForgotLogin from "./components/ForgotLogin";
import Signup from "./components/Signup";
import Admin from "./components/Admin";
import PageNotFound from "./components/PageNotFound";
import Footer from "./shared/Footer";
import "./NavBar.css";
import "./Pages.css";
import "./Footer.css";
import "./MediaQueries.css";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user") || {});

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tracker" element={<FinancialTracker />} />
        <Route path="/credit-score" element={<CreditScore />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/signup"
          element={<Signup user={user} setUser={setUser} />}
        />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route
          path="/forgot-login"
          element={<ForgotLogin user={user} setUser={setUser} />}
        />
        <Route path="/admin" element={<Admin />} />
        <Route path="/redirect" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
