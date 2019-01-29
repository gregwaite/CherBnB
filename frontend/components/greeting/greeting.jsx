import React from 'react';
import { openModal } from '../../actions/modal_actions';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
  const sessionLinks = () => {
    return (
      <nav className="login-signup">
        <section className='session-menu'>
          <button onClick={() => dispatch(openModal('login'))}>
            Log In Sugar
          </button>
          <br/>
          <button onClick={() => dispatch(openModal('signup'))}>
            Sign Up Honey
          </button>
        </section>
      </nav>
    );
  };

  const personalGreeting = () => {
    return (
      <hgroup className="header-group">
        <h2 className="header-name">
          What can I, Cher, do for you, {currentUser.username}? I am Cher.
        </h2>
        <br/>
        <button className="header-button" onClick={logout}>Logout</button>
      </hgroup>
    );
  }

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;