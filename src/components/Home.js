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
         <div class="fire">Burning Airlines</div>
<link async href="http://fonts.googleapis.com/css?family=Anton" data-generated="http://enjoycss.com" rel="stylesheet" type="text/css"/>
          <h3>
            <Link to="/search">Search</Link> for a flight.
          </h3>
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
