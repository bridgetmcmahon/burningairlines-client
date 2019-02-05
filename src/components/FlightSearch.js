import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';

class FlightsForm extends Component {
  constructor() {
    super();
    this.state = {
      origin: '',
      destination: '',
    }

    this._handleInputOrigin = this._handleInputOrigin.bind(this);
    this._handleInputDestination = this._handleInputDestination.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInputOrigin(e) {
    this.setState({ origin: e.target.value });
  }

  _handleInputDestination(e) {
    this.setState({ destination: e.target.value });
  }

  _handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Search For A Flight:</h2>
        <form onSubmit={ this._handleSubmit }>
          <input type="text" placeholder="from" required onInput={ this._handleInputOrigin } />
          <input type="text" placeholder="to" required onInput={ this._handleInputDestination } />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

class FlightsResults extends Component {
  render() {
    return (
      <div>
        { this.props.flights.map( (flight) => <p key={ flight.id }>{ flight.date }, { flight.number }, { flight.origin } to { flight.destination }</p> )}
      </div>
    );
  }
}

class Flights extends Component {
  constructor() {
    super();
    this.state = {
      flights: [
        {id: 1, number: 23, date: "02/02/2019", origin: "SYD", destination: "BNE", airplane: 747},
        {id: 2, number: 412, date: "03/02/2019", origin: "SYD", destination: "MEL", airplane: 757},
        {id: 3, number: 19, date: "04/02/2019", origin: "MEL", destination: "SYD", airplane: 747},
      ]
    }
  }

  render() {
    return (
      <div>
        <FlightsForm />
        <FlightsResults flights={ this.state.flights }/>
        <Link to="/">Back to Home</Link>
      </div>
    )
  }
}

export default Flights;
