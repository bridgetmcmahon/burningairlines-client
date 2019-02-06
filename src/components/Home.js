 import React, { Component } from 'react';
 import { Link } from 'react-router-dom';
 import SignInForm from './SignInForm';
 import '../index.css';
 import Navigation from './Navigation';

 class Home extends Component {
   render() {
     return (


       <div>
         <Navigation />
         <div className="container">
          <h1>Welcome to Burning Airlines</h1>
          <p>
            <Link to="/search">Search</Link> for a flight.
          </p>
          <p>
            Have an account? Sign in:
          </p>
          <SignInForm />
         </div>

       </div>
     );
   }
 }

export default Home;
