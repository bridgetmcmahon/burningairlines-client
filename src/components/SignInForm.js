import React, { Component } from 'react';

class SignInForm extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="container">
        <form className="form">
          <label>Username:</label>
          <input type="text" placeholder="username" />
          <label>Password:</label>
          <input type="password" placeholder="password" />
          <input type="submit" value="Sign In" />
        </form>
      </div>
    );
  }
}

export default SignInForm;
