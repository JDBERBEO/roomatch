import React from "react";
<<<<<<< Updated upstream
import SignUpRoomie from '../components/SignUpRoomie'

export const SignUpForm = () => {
  return (
    <div>
      <div class="divider"></div>
      <h2>Register Roomie</h2>
      <br></br>
      <div class="divider"></div>
      <br></br>
      <SignUpRoomie 
      />
    </div>
  );
};
=======
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from 'axios'


class SignUpForm extends React.Component{
  state={
    email:"",
    password:"",
  }
  const handleChange= e =>{
    const{name, value}= e.target;
    this.setState({[name]:value});
  }
  const signupForm= async userData =>{
    try{
      cosnt{data}=axios({
        method:'Post'
        baseURL: 'http://localhost:8000'
        url: "/signup"
        data:userData
      })
      setShow(false);
      console.log(e.target)
   }
   catch(error){
     console.dir(error),
     this.state({error:error.response.data})
   }
  }
  render(){

    const { email, password } = this.state
    const { buttonText, disabled, handleSubmit } = this.props
  
    return (
      <div>
        <Container>
          <Row className="justify-content-center">
            <Col className="col-6">
              <Form onSubmit={(e) =>{
              e.preventDefault()
              handleSubmit(this.signupForm)}}>
                <Form.Group controlId="names" onChange={this.handleChange} value={names}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="lastName" onChange={this.handleChange} value={lastName}>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="email" onChange={this.handleChange} value={email}>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="password" onChange={this.handleChange} value={password}>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="age" onChange={handleChange} value={age}>
                  <Form.Label>Age</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="personalDescription" onChange={this.handleChange} value={personalDescription}>
                  <Form.Label>Personal Description</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox" onChange={this.handleChange} value={formBasicCheckbox}>
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
  

export default SignUpForm;
>>>>>>> Stashed changes
