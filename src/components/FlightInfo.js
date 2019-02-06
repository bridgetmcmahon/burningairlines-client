import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class FlightInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flight: [],
      planeID: 0,
      airplane: {},
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id

    let FLIGHT_URL = `http://localhost:4000/flights/${ id }.json`

    axios.get(FLIGHT_URL).then( (results) => {
      this.setState({
        flight: results.data,
        planeID: results.data.airplane_id
      });

      let AIRPLANE_URL = `http://localhost:4000/airplanes/${ this.state.planeID }.json`

      axios.get(AIRPLANE_URL).then( (airplaneResults) => {
        this.setState({
          airplane: airplaneResults.data
        });
        console.log(this.state);
      });
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Flight Information</h1>
          <p>
            Flight Number: { this.state.flight.number }
          </p>
          <p>
            Date: { this.state.flight.date }
          </p>
          <p>
            Origin: { this.state.flight.origin }
          </p>
          <p>
            Destination: { this.state.flight.destination }
          </p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }
}

export default FlightInfo;
