import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './component/Home';

const Routes = {
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
    </div>
  </Router>
}

export default Routes
