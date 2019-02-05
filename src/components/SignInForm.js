import React, { Component } from 'react';

class SignInForm extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <input type="submit" value="Sign In" />
        </form>
      </div>
    );
  }
}
