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
    const { status, start_date, end_date } = booking;
    const spot = this.props.spot || {};
    return (
    <div className="booking-index-item">
      <ul className="status-item">
        <li>{status}</li>
      </ul>
      <ul className="startDate-item">
        <li>{start_date}</li>
        <li>Start Date</li>
      </ul>
      <ul className="endDate-item">
        <li>{end_date}</li>
        <li>End Date</li>
      </ul>
      <Link to={`/spots/${booking.spot_id}`} onClick={this.handleClick}>
        <li>
          {spot.title}
        </li>
        </Link>
    </div>
    )
  }
}

export default BookingIndexItem;