import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AirplanesAdmin extends Component {
  render() {
    return (
      <div className="container">
        <h1>Burning Airlines</h1>
        <h2>Airplanes - Admin</h2>

        <form>
          <input type="text" placeholder="name" />
          <input type="text" placeholder="rows" />
          <input type="text" placeholder="columns" />
          <input type="submit" value="Add Airplane" />
        </form>

        <Link to="/">Back to Home</Link>
      </div>
    )
  }
}

export default Airplanes Admin
