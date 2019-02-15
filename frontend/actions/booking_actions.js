import * as APIUtil from '../util/booking_api_util';

export const RECEIVE_ALL_BOOKINGS = "RECEIVE_ALL_BOOKINGS";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const REMOVE_BOOKING = "REMOVE_BOOKING";

const receiveAllBookings = bookings => {
  return {
    type: RECEIVE_ALL_BOOKINGS,
    bookings,
  };
};

const receiveBooking = booking => {
  return {
    type: RECEIVE_BOOKING,
    booking,
  };
};

const removeBooking = bookingId => {
  return {
    type: REMOVE_BOOKING,
    bookingId,
  };
};

export const fetchBookings = guestId => dispatch => {
  return APIUtil.fetchBookings(guestId).then(bookings => dispatch(receiveAllBookings(bookings)));
};

export const fetchBooking = (id) => dispatch => {
  return APIUtil.fetchBooking(id).then(booking => dispatch(receiveBooking(booking)));
};

export const createBooking = booking => dispatch => {
  return APIUtil.createBooking(booking).then(booking => dispatch(receiveBooking(booking)));
};

export const updateBooking = booking => dispatch => {
  return APIUtil.updateBooking(booking).then(booking => dispatch(receiveBooking(booking)));
};

export const destroyBooking = id => dispatch => {
  return APIUtil.destroyBooking(id).then(booking => dispatch(removeBooking(id)));
};