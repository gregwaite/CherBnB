import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';


class BookingIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.moment = moment;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.closeModal();
  }

  render() {
    const { booking, cancelBooking } = this.props;
    let { start_date, end_date } = booking;

    start_date = this.moment(start_date);
    end_date = this.moment(end_date);
    const spot = this.props.spot || {photoUrls: [], price: 0};
    const total = end_date.diff(start_date, 'days') * spot.price;
    return (
    <div className="booking-index-item">
      <div className="bookings_photo">
          <Link to={`/spots/${booking.spot_id}`} onClick={this.handleClick}>
            <img src={spot.photoUrls[0]} alt=""/>
          </Link>
      </div>
      <div className="booking-index-item-contents">
        <h1>{spot.title}</h1>
          <div className="booking-index-item-detail">
            <h5>Details</h5>
            <p>{`${start_date.format('MMMM Do')} - ${end_date.format('MMMM Do YYYY')}`}</p>
            <p>{`Total cost $${total}`}</p>
            <button onClick={() => cancelBooking(booking.id)}>CANCEL BOOKING</button>
          </div>
      </div>
      
    </div>
    )
  }
}

export default BookingIndexItem;