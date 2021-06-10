import React from 'react'
import './App.css';
// import { Carouselph } from './components/Carousel';
// import { SingUp } from './components/SingUp';
// import { SingIn } from './components/SingIn';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import { ModalHome } from './components/ModalHome';
import {BrowserRouter as Router, Route, Switch}  from 'react-router-dom'
import { Home } from './views/Home';
import { SignUpForm } from './views/SignUpForm';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signup" component={SignUpForm}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
