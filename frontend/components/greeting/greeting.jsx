import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
  const sessionLinks = () => {
    return (
      <nav className="login-signup">
        <Link to="/login">
          Login Sugar
        </Link>
        <Link to="/signup">
          Sign Up Honey
        </Link>

      </nav>
    );
  };

  const personalGreeting = () => {
    return (
      <hgroup className="header-group">
        <h2 className="header-name">
          Hello, {currentUser.username}. Care to find life after love?
        </h2>
        <button className="header-button" onClick={logout}>Logout</button>
      </hgroup>
    );
  }

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;