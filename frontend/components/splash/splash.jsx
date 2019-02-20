import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import Modal from '../session_form/session_modal';
import DatePicker from '../datepicker/date_picker';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
    };

    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
  }

  handleStartChange(date) {
    this.setState({
      startDate: date,
    });
  }
  handleEndChange(date) {
    this.setState({
      endDate: date,
    });
  }
  
  render() {
    return (
    <div className="home-page">
      <Modal />
      <header className="home-header">
        <GreetingContainer></GreetingContainer>
        <h1>Take Me Home, to CherBnB</h1>
      </header>
      <div className='bookings-search'>
        <h1>Share homes and experiences exclusively with Cher.</h1>
        <p className='where'>Where</p>
        <input type="text" placeholder="Anywhere that you, Cher, own, because you are Cher"/>
          
          <div className='checkin-checkout'>
            <p>Check In</p>
            <p>Check Out</p>
          </div>
          <section className="datepickers">
            <DatePicker
              handleStartChange={this.handleStartChange}
              handleEndChange={this.handleEndChange}
            />
          </section>
          <section className='guests'>
            <p>Guests</p>
            <input type="text" placeholder='Guests dropdown will go here'/>
          </section>

          <Link className= 'search-button' to='/search'>Search</Link>
          <button className='search-button'>Search</button>
      </div>
    </div>
    )
  }
}

export default Splash