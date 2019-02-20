import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import Modal from '../session_form/session_modal';
import DatePicker from '../datepicker/date_picker';
import ReviewIndexContainer from '../reviews/review_index_container';
import { openModal } from '../../actions/modal_actions';

class SpotShow extends React.Component {
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

    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.handleBookSubmit = this.handleBookSubmit.bind(this);
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
  handleBookSubmit() {
    const booking = {
      start_date: this.state.startDate,
      end_date: this.state.endDate,
      status: 'Approved',
      spot_id: this.props.match.params.spotId,
    };
    this.props.createBooking(booking).then(booking => dispatch(openModal('booking')));
  }
  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
  }

  render() {
    const spot = this.props.spot || { photoUrls: [] };
    return (
      <div id='show-greeting'>
        <section>
          <Modal />
          <GreetingContainer></GreetingContainer>
        </section>
        <div className="whole-show">
          <div className='show-div'>
            <img src={spot.photoUrls[0]} />
            <div className='basic-info'>
              <li className='show-spot-type'>
                {spot.spot_type}
              </li>
              <li className='show-title'>
                {spot.title}
              </li>
              <li className='show-address'>
                {spot.address}
              </li>
            </div>

            <div className='show-description'>
              <li>
                {spot.description}
              </li>
            </div>

            <div className='show-ammenities'>
              <li>
                {spot.ammenities}
              </li>
            </div>

          </div>

          <div className="bookings-search">
            <h1>Book this spot, me. I am Cher.</h1>
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
              <input type="text" placeholder='Guests dropdown will go here' />
            </section>

            <button className='search-button' onClick={this.handleBookSubmit}>Book</button>
          </div>


        </div>
        <div className="reviews-container">
          <ReviewIndexContainer></ReviewIndexContainer>
        </div>
      </div>
    )
  }
}

export default SpotShow