import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SpotIndexContainer from './spots/spot_index_container';
import SpotShowContainer from './spots/spot_show_container';
import SplashContainer from './splash/splash_container';
// import DatePicker from './splash/date_picker';


const App = () => (
  <div className="app-div">
    <Switch>
      <Route exact path="/spots/:spotId" component={SpotShowContainer} />
      {/* <Route exact path='/datepicker' component={DatePicker}></Route> */}
      <Route exact path='/' component={SplashContainer}></Route>
    </Switch>
      <Route exact path="/" component={SpotIndexContainer} />
  </div>
);

export default App;