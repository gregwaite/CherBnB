import React from 'react';
import BookingIndexItem from './booking_index_item';

class BookingIndex extends React.Component {
  componentDidMount(){
    this.props.fetchSpots();
    this.props.fetchBookings();
    document.addEventListener("keydown", (e) => this.handleKeyDown(e));
  }

  handleKeyDown(e) {
    if (e.keyCode === 27) {
      this.props.closeModal();
    }
  }

  render(){
    const { spots, closeModal } = this.props;
    const bookings = this.props.bookings.map(booking => {
      return (
        <div className={this.className} key={booking.id}>
          <BookingIndexItem
            booking={booking}
            spot={spots[booking.spot_id]}
            closeModal={closeModal}
            // handleDeleteSubmit={this.handleDeleteSubmit}
          ></BookingIndexItem>
        </div>
      )}
    )
    
    return (
      <div className='booking-index-modal'>
        {bookings}
      </div>
    )
  }
}

export default BookingIndex;