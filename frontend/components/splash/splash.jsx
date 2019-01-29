import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import Modal from '../session_form/session_modal';

class Splash extends React.Component {
  
  
  
  render() {
    return (
    <div className="home-page">
      <Modal />
      <header className="home-header">
        <Link className='home-link' to='/'>Home</Link>
        <GreetingContainer></GreetingContainer>
        <h1>Take Me Home, to CherBnB</h1>
      </header>
    </div>
    )
  }
}

export default Splash