import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navigation extends Component {
  render() {
    return (
      <header className="navigation">
        <nav>
          <span><strong>Burning Airlines</strong></span>
          <span><Link to="/">Home</Link></span>
          <span><Link to="/search">Search Flights</Link></span>
        </nav>
      </header>
    )
  }
}

export default Navigation;
