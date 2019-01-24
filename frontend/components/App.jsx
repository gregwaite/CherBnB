import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';
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

    {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
  </div>
);

export default App;