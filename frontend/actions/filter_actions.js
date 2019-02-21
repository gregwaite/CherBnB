import { fetchSpots } from './spot_actions';

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const UPDATE_CENTER = 'UPDATE_CENTER';

const changeFilter = (filter, value) => {
  return {
    type: UPDATE_FILTER,
    filter,
    value
  };
};
const changeCenter = (filter, center) => {
  return {
    type: UPDATE_CENTER,
    filter,
    center
  };
};

export const updateFilter = (filter, value) => dispatch => {
  dispatch(changeFilter(filter, value));
  return fetchSpots(getState().ui.filter)(dispatch);
};
export const updateCenter = (filter, center) => dispatch => {
  dispatch(changeCenter(filter, center));
};