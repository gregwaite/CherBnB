import React from 'react';
import BookingIndexItem from './booking_index_item';
import moment from 'moment';

class BookingIndex extends React.Component {
  constructor(props){
    super(props);
    this.today = moment();
  }
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
    const pastBookings = this.props.bookings.filter(booking => {
      return (new Date(this.today) > new Date(booking.start_date));
    });
    let upcomingBookings = this.props.bookings.filter(booking => {
      return (new Date(this.today) <= new Date(booking.start_date));
    });
    
    const that = this;
    let nextBook = upcomingBookings[0] ? [upcomingBookings[0]] : (<li>You have no upcoming reservations, you big lug</li>);
    if (nextBook[0]) {
      upcomingBookings.forEach(booking => {
        if ((new Date(that.today) - new Date(booking.start_date)) > (new Date(that.today) - new Date(nextBook[0].start_date))) 
          nextBook = [booking];
        }
      );
      upcomingBookings = upcomingBookings.filter(booking => {
        return booking !== nextBook[0];
      });
      nextBook = nextBook.map(booking => {
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
    }
    const upcomingSortedBookings = upcomingBookings.sort((a,b) => {
      return new Date(a.start_date) - new Date(b.start_date);
    });
    const upcomingBookingsDivs = upcomingSortedBookings.map(booking => {
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
    let pastBe = pastBookings.length > 0 ? pastBookings.map(booking => {
      return (
        <div className={this.className} key={booking.id}>
          <BookingIndexItem
            booking={booking}
            spot={spots[booking.spot_id]}
            closeModal={closeModal}
          // handleDeleteSubmit={this.handleDeleteSubmit}
          ></BookingIndexItem>
        </div>
      )
    }
    ) : (<li>You have none, you big lug</li>)
      return (
      <div className='booking-index-modal'>
        <h1 className='bookings-index-h1'>Your next res, sugar</h1>
          {nextBook}
        <h1 className='bookings-index-h1'>Other upcoming reservations, darling</h1>
          {upcomingBookingsDivs}
        <h1 className='bookings-index-h1'>Your previous reservations, you big lug</h1>
          {pastBe}
      </div>
    )
  }
}

export default BookingIndex;