import merge from 'lodash/merge';

const defaultAmenitites = Object.freeze({
  amenities: {
    
  }
});

const amenititesReducer = (state = defaultAmenitites => {
  Object.freeze(state);
    return state;
});



export default amenititesReducer;