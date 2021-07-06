import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./views/Home";
import { SignUpForm } from "./views/SignUpForm";
import { Advertisements } from "./views/Advertisements";
import { Publication } from "./views/Publication";
import BeHost from "./views/BeHost";
import { HostProfile } from "./views/HostProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/advertisements" component={Advertisements} />
          <Route exact path="/reservation" component={Publication} />
          <Route exact path="/behost" component={BeHost} />
          <Route exact path="/behost" component={BeHost} />
          <Route exact path="/host/profile" component={HostProfile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
