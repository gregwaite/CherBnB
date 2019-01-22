import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session_actions';

const _nullstate = Object.freeze({
  id: null
});

const sessionReducer = (oldState = _nullState, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {id: action.user.id};
    case LOGOUT_CURRENT_USER:
      return _nullstate;
    default:
      return oldState;
  }
}

export default sessionReducer;