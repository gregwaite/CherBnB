import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Booking from './booking_index';
import { fetchBookings, destroyBooking, updateBooking } from '../../actions/booking_actions';
import { fetchSpots } from '../../actions/spot_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    bookings: Object.values(state.entities.bookings),
    spots: state.entities.spots,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBookings: () => dispatch(fetchBookings()),
    updateBooking: (booking) => dispatch(updateBooking(booking)),
    destroyBooking: (id) => dispatch(destroyBooking(id)),
    closeModal: () => dispatch(closeModal()),
    fetchSpots: () => dispatch(fetchSpots()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Booking));