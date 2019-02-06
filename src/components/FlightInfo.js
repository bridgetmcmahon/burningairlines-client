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
      totalRows: [],
      totalCols: [],
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

      axios.get(AIRPLANE_URL).then( (results) => {

        let plane = results.data;
        let rowArray = new Array(plane.rows).fill(null);
        let colArray = new Array(plane.columns).fill(null);

        for (var i = 0; i < rowArray.length; i++) {
          rowArray[i] = i + 1;
        }

        for (var i = 0; i < colArray.length; i++) {
          colArray[i] = i + 1;
        }

        console.log(rowArray, colArray);

        this.setState({
          airplane: results.data,
          totalRows: rowArray,
          totalCols: colArray,
        });
        // console.log(this.state);
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

          <div>
            { this.state.totalRows.map( (rowNo) =>
              <div>
                <Row />
              </div>
            )}
          </div>

        <Link to="/">Back to Home</Link>
      </div>
    );
  }
}

class Row extends Component {
  render() {
    return (
      <span>
        Seat
      </span>
    );
  }
}

export default FlightInfo;
