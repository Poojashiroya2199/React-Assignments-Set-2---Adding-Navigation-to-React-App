import React, { Component } from "react";
import "../styles/App.css";

import { Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Error from "./Error";
// import { useHistory } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <>
        <div id="main">{/* Do not remove the main div */}</div>
        <div>
          <Link to="/">Home</Link>
          <br />
          <Link to="/about">About</Link>
        </div>
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/" exact component={Home} />
          <Route component={Error} />
        </Switch>
      </>
    );
  }
}

export default App;
