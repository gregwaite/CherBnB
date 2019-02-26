import React from 'react';
import { Link } from 'react-router-dom';

class BookingIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.closeModal();
  }

  render() {
    const { booking } = this.props;
    let { start_date, end_date, num_guests } = booking;
    start_date = start_date.toString().slice(5, 10) + '-' + start_date.toString().slice(0, 4);
    end_date = end_date.toString().slice(5, 10) + '-' + end_date.toString().slice(0,4);
    const spot = this.props.spot || {photoUrls: []};
    return (
    <div className="booking-index-item">
      <ul className="bookings_photo">
          <Link to={`/spots/${booking.spot_id}`} onClick={this.handleClick}>
            <img src={spot.photoUrls[0]} alt=""/>
          </Link>
      </ul>
      <ul className="startDate-item">
        <li>{start_date}</li>
        <li>Start Date</li>
      </ul>
      <ul className="endDate-item">
        <li>{end_date}</li>
        <li>End Date</li>
      </ul>
      <ul className="booking-guests-num">
        <li>{num_guests}</li>
        <li>This many Chers</li>
      </ul>
   
    </div>
    )
  }
}

export default BookingIndexItem;