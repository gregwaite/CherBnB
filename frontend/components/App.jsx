import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import Modal from './session_form/session_modal';
import { Link } from 'react-router-dom';

const App = () => (
  <div>
    <Modal />
    <header>
      <Link to="/" className="header-link"></Link>
      <h1>CherBnB</h1>
      <GreetingContainer></GreetingContainer>
    </header>

  </div>
);

export default App;