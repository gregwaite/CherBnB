import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import { merge } from 'lodash';

const reviewsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch(action.type) {
    case RECEIVE_ALL_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      newState.reviews[Object.values(action.review)[0].id] = Object.values(action.review)[0];
      return newState;
    case REMOVE_REVIEW:
      delete newState.reviews[action.reviewId];
      return newState;
    default:
      return oldState;
  }
};

export default reviewsReducer;