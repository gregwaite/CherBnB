import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import spotsReducer from './spots_reducer';
import reviewsReducer from './reviews_reducer';
import bookingsReducer from './bookings_reducer';
import amenitiesReducer from './amenities_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  spots: spotsReducer,
  reviews: reviewsReducer,
  bookings: bookingsReducer,
  amenities: amenitiesReducer,
});

export default entitiesReducer;