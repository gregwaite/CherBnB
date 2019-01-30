import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import Modal from '../session_form/session_modal';
import DatePicker from 'react-datepicker';

class Splash extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      focusedInput: 'startDate',
      calendarFocused: null,
      openDatePicker: false,
      dropDownMode: 'scroll'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
      focusedInput: 'startDate',
      calendarFocused: null,
      openDatePicker: false,
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
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          withPortal
        />
      </div>
    </div>
    )
  }
}

export default Splash