
import merge from 'lodash/merge';

import { UPDATE_FILTER, UPDATE_CENTER } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
  bounds: {},
  center: {},
  guest_request: {num: 1},
});

const filtersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_FILTER:
      if (!action.value){
        let newState = merge({}, state);
        delete newState[action.filter];
        return newState;
      } else {
        const newFilter = {
          [action.filter]: action.value
        };
        return merge({}, state, newFilter);
      }
      
    case UPDATE_CENTER:
      const newCenter = {
        [action.filter]: action.center
      };
      return merge({}, state, newCenter);
    default: 
      return state;
  }
};



export default filtersReducer;