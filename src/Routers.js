import React from 'react';
import Cards from './Cards';
import Watch from './Watch'
import InfoPage from './InfoPage'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CardInitial from './CardInitial';

const Routers = () => {
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route path="/" component={CardInitial} >
            <CardInitial />
          </Route>
          {/* <Route path="./about">
            <About />
          </Route> */}
          <Route path="/dashboard" component={InfoPage} >
            <InfoPage title="Hello" />
          </Route>
        </Switch>
      </div>
    </Router>
}

export default Routers;