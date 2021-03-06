import React from "react";
import MainLogo from "../../static_assets/main_icon";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout, openModal, noText }) => {
  const sessionLinks = () => {
    return (
      <nav className="login-signup">
        <Link className="home-link" to="/">
          <MainLogo />
        </Link>
        <section className="session-menu">
          <button onClick={() => openModal("login")}>Log In Sugar</button>
          <br />
          <button onClick={() => openModal("signup")}>Sign Up Honey</button>
        </section>
      </nav>
    );
  };

  const personalGreeting = () => {
    let text;
    if (noText) {
      text = "";
    } else {
      text = `What can I, Cher, do for you, ${
        currentUser.username
      }? I am Cher.`;
    }
    return (
      <nav className="login-signup">
        <Link className="home-link" to="/">
          <MainLogo />
        </Link>
        <h2 className="header-name">{text}</h2>
        <br />
        <section className="session-menu">
          <button
            className="header-button"
            onClick={() => openModal("booking")}
          >
            Bookings
          </button>
          <button className="header-button" onClick={logout}>
            Logout
          </button>
        </section>
      </nav>
    );
  };

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
