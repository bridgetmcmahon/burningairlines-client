import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';

class FlightInfo extends Component {
  render() {
    return (
      <div>
        <h1>Flight Information</h1>
          <p>

          </p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }
}

export default FlightInfo;
