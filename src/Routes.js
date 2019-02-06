import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import FlightSearch from './components/FlightSearch';
import FlightInfo from './components/FlightInfo';
import FlightsAdmin from './components/FlightsAdmin';
import AirplanesAdmin from './components/AirplanesAdmin';

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/search" component={ FlightSearch } />
      <Route path="/flight/:id" component={ FlightInfo } />
      <Route exact path="/flights" component={ FlightsAdmin } />
      <Route exact path="/airplanes" component={ AirplanesAdmin } />
    </div>
  </Router>
)

export default Routes;
