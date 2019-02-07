import React, { Component } from 'react';
import axios from 'axios';

const USERS_URL = "http://localhost:3000/users.json"

class BookingForm extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      seat: '',
      user_id: 0,
      flight_id: 0,
      reserved: true
    }

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleInput = this._handleInput.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  componentDidMount() {
    axios.get(USERS_URL).then( (results) => {
      let users = []
      console.log(results);

      for (var i = 0; i < results.data.length; i++) {
        let user = results.data[i];
        users.push(user);
        this.setState({ users: users, user_id: users.id })
      }
    });
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit( this.state );

  }

  _handleInput(e) {
    this.setState({ seat : e.target.value });
  }

  _handleChange(e) {
    this.setState({ user_id : e.target.value });
  }

  render() {
    return (
      <div className="booking">
        <form onSubmit={ this._handleSubmit }>
          <label>User:</label>
          <select>
            { this.state.users.map( (user) => <option value={user.id} onChange={this._handleChange}>{ user.name }</option>) }
          </select>

          <input type="text" placeholder="25C" onInput={ this._handleInput } />
          <input type="submit" value="Book Flight" />
        </form>
      </div>
    );
  }
}

export default BookingForm;
