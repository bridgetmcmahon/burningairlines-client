import React, { Component } from 'react';
import axios from 'axios';

const USERS_URL = "http://localhost:3000/users.json"

class BookingForm extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    }
  }

  componentDidMount() {
    axios.get(USERS_URL).then( (results) => {
      let usernames = []
      console.log(results);

      for (var i = 0; i < results.data.length; i++) {
        let user = results.data[i];
        usernames.push(user.name);
        this.setState({ users: usernames })
      }
      console.log(usernames);
    });
  }

  render() {
    return (
      <div className="booking">
        <form>
          <label>User:</label>
          <select>
            { this.state.users.map( (user) => <option>{ user }</option>) }
          </select>

          <input type="text" placeholder="25C"/>
          <input type="submit" value="Book Flight" />
        </form>
      </div>
    );
  }
}

export default BookingForm;
