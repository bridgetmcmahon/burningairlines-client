 import React, { Component } from 'react';
 import { Link } from 'react-router-dom';

 class Home extends Component {
   render() {
     return (
       <div>
        <h1>Welcome to Burning Airlines</h1>
        <p>
          <Link to="/search">Search</Link> for a flight.
        </p>
       </div>
     );
   }
 }

export default Home;
