import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FlightsAdmin extends Component {
  render() {
    return (
      <div>
        <h1>Burning Airlines</h1>
        <h2>Flights - Admin</h2>

        <form>
          <input type="text" placeholder="flight #"/>
          <input type="text" placeholder="date"/>
          <input type="text" placeholder="origin"/>
          <input type="text" placeholder="destination"/>
          <input type="text" placeholder="plane"/>
          <input type="submit" value="Save Flight" />
        </form>

        <Link to="/">Return to Home</Link>
      </div>
    )
  }
}

export default FlightsAdmin;
