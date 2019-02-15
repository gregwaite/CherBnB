import { RECEIVE_ALL_BOOKINGS, RECEIVE_BOOKING, REMOVE_BOOKING } from '../actions/booking_actions';
import { merge } from 'lodash';

const bookingsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_ALL_BOOKINGS:
      return action.bookings;
    case RECEIVE_BOOKING:
      newState[action.booking.id] = action.booking;
      return newState;
    case REMOVE_BOOKING:
      delete newState[action.bookingId];
      return newState;
    default:
      return oldState;
  }
};

export default bookingsReducer;