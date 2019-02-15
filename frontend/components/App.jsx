import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SpotIndexContainer from './spots/spot_index_container';
import SpotShowContainer from './spots/spot_show_container';
import SplashContainer from './splash/splash_container';
import DatePicker from './splash/date_picker';
import ReviewIndexContainer from './reviews/review_index_container';
import BookingIndex from './bookings/booking_index_container';


const App = () => (
  <div className="app-div">
    <Switch>
      <Route exact path="/spots/:spotId" component={SpotShowContainer} />
      <Route exact path='/datepicker' component={DatePicker}></Route>
      <Route exact path='/bookings' component={BookingIndex}></Route>
      <Route exact path='/spots/:spotId/reviews' component={ReviewIndexContainer}></Route>
      <Route exact path='/' component={SplashContainer}></Route>
    </Switch>
      <Route exact path="/" component={SpotIndexContainer} />
  </div>
);

export default App;