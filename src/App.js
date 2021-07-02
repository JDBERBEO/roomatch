import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./views/Home";
import { SignUpForm } from "./views/SignUpForm";
import { Advertisements } from "./views/Advertisements";
import { RoomieProfile } from "./views/RoomieProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/roomie/signup" component={SignUpForm} />
          <Route exact path="/advertisements" component={Advertisements} />
          <Route exact path="/roomie/profile" component={RoomieProfile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
