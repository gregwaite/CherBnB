import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Booking from './booking_index';
import { fetchBookings, destroyBooking, updateBooking } from '../../actions/booking_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    bookings: Object.values(state.entities.bookings),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBookings: () => dispatch(fetchBookings()),
    updateBooking: (booking) => dispatch(updateBooking(booking)),
    destroyBooking: (id) => dispatch(destroyBooking(id)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Booking));