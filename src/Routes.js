import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import FlightSearch from './components/FlightSearch';
import FlightInfo from './components/FlightInfo';

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/search" component={ FlightSearch } />
      <Route path="/flight/:number" component={ FlightInfo } />
    </div>
  </Router>
)

export default Routes;
