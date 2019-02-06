 import React, { Component } from 'react';
 import { Link } from 'react-router-dom';
 import SignInForm from './SignInForm';
 import '../index.css';

 class Home extends Component {
   render() {
     return (
       <div className="container">
        <h1>Welcome to Burning Airlines</h1>
        <p>
          <Link to="/search">Search</Link> for a flight.
          <Link to="/airplanes">Airplanes</Link> for Admin.
        </p>
        <p>
          Have an account? Sign in:
        </p>
        <SignInForm />
       </div>
     );
   }
 }

export default Home;
