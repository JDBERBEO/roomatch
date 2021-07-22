import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./views/Home";
import { SignUpForm } from "./views/SignUpForm";
import { Advertisements } from "./views/Advertisements/Advertisements";
import { RoomieProfile } from "./views/RoomieProfile";
import { Reservations } from "./views/Reservations";
import AdvertisementsMain from "./views/Advertisements/AdvertisementsMain";
import { Advertisement } from "./views/Advertisements/Advertisement";
import BeHost from "./views/BeHost";
import { HostProfile } from "./views/HostProfile";
import { PrivateRouter } from "./router/PrivateRouter";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/roomie/signup" component={SignUpForm} />
          <Route exact path="/reservations" component={Reservations} />
          <PrivateRouter
            exact
            path="/roomie/profile"
            component={RoomieProfile}
          />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/advertisements" component={AdvertisementsMain} />
          <Route exact path="/behost" component={BeHost} />

          <PrivateRouter exact path="/host/profile" component={HostProfile} />
          <PrivateRouter
            exact
            path={`/advertisement/:id`}
            component={Advertisement}
          />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
