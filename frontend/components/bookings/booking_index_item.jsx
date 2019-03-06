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
      <ul className="bookings_photo">
          <Link to={`/spots/${booking.spot_id}`} onClick={this.handleClick}>
            <img src={spot.photoUrls[0]} alt=""/>
          </Link>
      </ul>
      <p>{spot.title}</p>
      <ul className="booking-item-details">
        <p>Details</p>
        <li>{`${start_date.format('MMMM Do')} - ${end_date.format('MMMM Do YYYY')}`}</li>
        <li>{`Total cost $${total}`}</li>
      </ul>
      
      <button onClick={() => cancelBooking(booking.id)}>CANCEL BOOKING</button>
    </div>
    )
  }
}

export default BookingIndexItem;