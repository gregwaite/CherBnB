import React from 'react';

class BookingIndexItem extends React.Component {

  render() {
    const { booking } = this.props;
    const { status, start_date, end_date } = booking;
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
    </div>
    )
  }
}

export default BookingIndexItem;