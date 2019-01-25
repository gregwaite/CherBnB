import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import Modal from './session_form/session_modal';
import { Link } from 'react-router-dom';

const App = () => (
  <div className="home-page">
    <Modal />
    <header className="home-header">
      <Link to="/" className="header-link"></Link>
      <GreetingContainer></GreetingContainer>
      <h1>Take Me Home, to CherBnB</h1>
    </header>

  </div>
);

export default App;