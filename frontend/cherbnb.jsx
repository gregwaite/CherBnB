import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import { login, signup, logout } from './actions/session_actions';
// import { fetchSpot, createSpot, updateSpot} from './util/spot_api_util';
// import { fetchSpots as APISpots }  from './util/spot_api_util';
// import { fetchSpots } from './actions/spot_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: {[window.currentUser.id]: window.currentUser}
      },
      session: {id: window.currentUser.id}
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.addEventListener('hashchange', () => {
    window.scrollTo(0, 0);
  });

  // window.fetchSpots = fetchSpots; 

  // window.APISpots = APISpots;
  // window.fetchSpot = fetchSpot; 
  // window.createSpot = createSpot; 
  // window.updateSpot = updateSpot; 
  
  // window.login = login;
  // window.signup = signup;
  // window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store}></Root>, root);
});