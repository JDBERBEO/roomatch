import React from 'react'
import './App.css';
import { Carouselph } from './components/Carousel';
import { SingUp } from './components/SingUp';
import { SingIn } from './components/SingIn';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ModalHome } from './components/ModalHome';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col><SingUp /></Col>
          <Col><SingIn /></Col>
          <ModalHome />
        </Row>
      </Container>
      <Carouselph />
    </div>
  );
}

export default App;
