import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import axios from 'axios';

const SERVER_URL = "http://localhost:4000/airplanes.json"

class AirplanesAdmin extends Component {
  constructor() {
    super();
    this.state = {
      plane_model: '',
      rows: '',
      columns: '',
    }
    this._handleInputPlaneModel = this._handleInputPlaneModel.bind(this);
  }
  _handleInputPlaneModel(e) {
    // console.log(e.target.value)
    this.setState({ plane_model: e.target.value });
  }
  render() {
    return (
      <div className="container">
        <h1>Burning Airlines</h1>
        <h2>Airplanes - Admin</h2>

        <form>
          <input type="text" placeholder="plane model" required onInput={ this._handleInputPlaneModel } />
          <input type="text" placeholder="rows" required onInput={ this._handleInputPlaneRows } />
          <input type="text" placeholder="columns" required onInput={ this._handleInputPlaneColumns } />
          <input type="submit" value="Add Airplane" />
        </form>

        <Link to="/">Back to Home</Link>
      </div>
    )
  }
}

export default AirplanesAdmin;
