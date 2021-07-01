import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

class Hostform extends React.Component {
  state = {
    name: "",
    lastName: "",
    email: "",
    password: "",
    age: "",
    description: "",
    profilePhoto: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { name, lastName, email, password, age, description, profilePhoto } =
      this.state;
    const { buttonText, disabled, handleSubmit } = this.props;
    return (
      <Container>
        <Row className="justify-content-center">
          <Col className="col-6">
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(this.state);
              }}
            >
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  onChange={this.handleChange}
                  value={name}
                />
              </Form.Group>
              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  name="lastName"
                  onChange={this.handleChange}
                  value={lastName}
                />
              </Form.Group>
              <Form.Group controlId="email" name="email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={this.handleChange}
                  value={email}
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={this.handleChange}
                  value={password}
                />
              </Form.Group>
              <Form.Group controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter age"
                  name="age"
                  onChange={this.handleChange}
                  value={age}
                />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Personal description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your personal description"
                  name="description"
                  onChange={this.handleChange}
                  value={description}
                />
              </Form.Group>
              <Form.Group controlId="profilePhoto">
                <Form.Label>Photo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter photo"
                  name="profilePhoto"
                  onChange={this.handleChange}
                  value={profilePhoto}
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit" disabled={disabled}>
                {buttonText}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Hostform;
