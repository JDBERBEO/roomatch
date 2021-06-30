import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./views/Home";
import { SignUpForm } from "./views/SignUpForm";
import { Advertisements } from "./views/Advertisements";
import { Publication } from "./views/Publication";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/advertisements" component={Advertisements} />
          <Route exact path="/reservation" component={Publication} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
