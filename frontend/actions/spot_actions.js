import * as APIUtil from '../util/spot_api_util';

export const RECEIVE_ALL_SPOTS = "RECEIVE_ALL_SPOTS";
export const RECEIVE_SPOT = "RECEIVE_SPOT";


const receiveAllSpots = spots => {
  return {
    type: RECEIVE_ALL_SPOTS,
    spots,
  };
};

const receiveSpot = spot => {
  return {
    type: RECEIVE_SPOT,
    spot: spot.spot,
  };
};

export const fetchSpots = (filter) => dispatch => {
  return APIUtil.fetchSpots(filter).then(spots => dispatch(receiveAllSpots(spots)));
};

export const fetchSpot = id => dispatch => {
  return APIUtil.fetchSpot(id).then(spot => dispatch(receiveSpot(spot))); 
};

export const createSpot = spot => dispatch => {
  return APIUtil.createSpot(spot).then(spot => dispatch(receiveSpot(spot)));
};

export const updateSpot = spot => dispatch => {
  return APIUtil.updateSpot(spot).then(spot => dispatch(receivePost(spot)));
};