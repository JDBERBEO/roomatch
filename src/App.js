import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./views/Home";
import { SignUpForm } from "./views/SignUpForm";
import  AdvertisementsMain from "./views/AdvertisementsMain";
import { Publication } from "./views/Publication";
import BeHost from "./views/BeHost";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/advertisements" component={AdvertisementsMain} />
          <Route exact path="/reservation" component={Publication} />
          <Route exact path="/behost" component={BeHost} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
