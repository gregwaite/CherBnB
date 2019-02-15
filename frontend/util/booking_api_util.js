export const fetchBookings = () => {
  return $.ajax({
    method: "GET",
    url: `api/bookings`
  });
};

export const fetchBooking = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/bookings/${id}`,
  });
};

export const createBooking = booking => {
  debugger
  return $.ajax({
    method: "POST",
    url: `api/bookings`,
    data: { booking },
  });
};

export const updateBooking = booking => {
  return $.ajax({
    method: "PATCH",
    url: `api/bookings/${booking.id}`,
    data: { booking },
  });
};

export const destroyBooking = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/bookings/${id}`,
    data: { id }
  });
};