import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css'
import Navigation from './Navigation';


class FlightInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flight: {},
      planeID: 0,
      airplane: {},
      rows: 0,
      columns: 0,
      reservations: {}
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id

    const FLIGHT_URL = `http://localhost:3000/flights/${ id }.json`
    axios.get(FLIGHT_URL).then( (results) => {
      this.setState({
        flight: results.data,
        planeID: results.data.airplane_id
      });


      const AIRPLANE_URL = `http://localhost:3000/airplanes/${ this.state.planeID }.json`
      axios.get(AIRPLANE_URL).then( (results) => {

        let plane = results.data;
        this.setState({
          airplane: results.data,
          rows: plane.rows,
          columns: plane.columns
        });

        const RESERVATION_URL = `http://localhost:3000/reservations.json`
        axios.get(RESERVATION_URL).then( (results) => {

          let reservations = results.data.filter(r => r.flight_id == id);
          this.setState({
            reservations: reservations
          });
        });
      });
    });
  }

  render() {
    return (
      <div>
        <Navigation />
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

            <Reservation data={ this.state }/>
        </div>
      </div>
    );
  }
}

class Reservation extends Component {

  createTable = () => {
    let d = this.props.data;
    let reservedSeats = [];
    let table = [];

    Array.from(d.reservations).forEach(function(r) {reservedSeats.push(r.seat);});

   for (let i = 1; i <= d.rows; i++) {
     let children = [];
     for (let j = 1; j <= d.columns; j++) {
       let seat = i +  String.fromCharCode(64 + j);
       if(reservedSeats.indexOf(seat) > -1) {
         children.push(<td>{`${seat}`} </td>);
       }
       else {
         children.push(<td> |___| &nbsp; &nbsp;</td>);
       }
     }

     table.push(<tr>{children}</tr>);
   }
   return table;
 }

  render() {
    return (
      <table>
        {this.createTable()}
      </table>
    );
  }
}

export default FlightInfo;
