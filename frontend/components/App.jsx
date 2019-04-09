import React from "react";
import { Route, Switch } from "react-router-dom";
import Featured from "./splash/featured";
import SpotShowContainer from "./spots/spot_show_container";
import SplashContainer from "./splash/splash_container";
import SearchContainer from "./search/search_container";

const App = () => (
  <div className="app-div">
    <Switch>
      <Route exact path="/spots/:spotId" component={SpotShowContainer} />
      <Route exact path="/search" component={SearchContainer} />
      <Route exact path="/" component={SplashContainer} />
    </Switch>
    <Route exact path="/" component={Featured} />
  </div>
);

export default App;
