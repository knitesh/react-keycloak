import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

import Welcome from './components/Welcome';
import Secured from './components/Secured';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <ul>
            <li>
              <Link to="/">Public Place</Link>
            </li>
            <li>
              <Link to="/secure">Secure Place</Link>
            </li>
          </ul>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/secure" component={Secured} />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
