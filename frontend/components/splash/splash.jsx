import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import Modal from '../session_form/session_modal';
import DatePicker from 'react-datepicker';


class Splash extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      lng: 0,
      lat: 0,
      startDate: '',
      endDate: '',
      numGuests: 1,
      focusedInput: 'startDate',
      calendarFocused: null,
      openDatePicker: false,
    };

    this.betweenDates = (date) => {
      return date >= this.state.startDate && date <= this.state.endDate;
    };

    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
  }

  handleStartChange(date) {
    this.setState({
      startDate: date,
      focusedInput: 'startDate',
      calendarFocused: null,
      openDatePicker: false,
    });
  }
  handleEndChange(date) {
    this.setState({
      endDate: date,
      focusedInput: 'startDate',
      calendarFocused: null,
      openDatePicker: false,
    });
  }
  
  render() {
    const { startDate, endDate } = this.state;
    const startDateString = startDate && startDate.format('ddd, MMM Do');
    const endDateString = endDate && endDate.format('ddd, MMM Do');

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
            {/* <DateRangePicker
              startDate={startDate} // momentPropTypes.momentObj or null,
              startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
              endDate={endDate} // momentPropTypes.momentObj or null,
              endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
              numberOfMonths={1}
            /> */}
            {/* <DatePicker
              selected={this.state.endDate}
              onChange={this.handleEndChange}
            /> */}
          </section>
          <section className='guests'>
            <p>Guests</p>
            <input type="text" placeholder='Guests dropdown will go here'/>
          </section>

          <button className='search-button'>Search</button>
      </div>
    </div>
    )
  }
}

export default Splash