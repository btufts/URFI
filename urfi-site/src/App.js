import React from "react";
import "./App.css";
import Homepage from "./site/Homepage.js";
import Checkspage from "./site/ChecksPage.js";
import Web from "./site/Web.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/site/Homepage.js">Homepage</Link>
            </li>
            <li>
              <Link to="/site/CheckPage.js">About</Link>
            </li>
            <li>
              <Link to="/site/Web.js">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/site/ChecksPage.js">
            <Checkspage />
          </Route>
          <Route path="/site/Web.js">
            <Web />
          </Route>
          <Route path="/site/Homepage.js">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
