import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { SingUp } from "./SingUp";

class ModalHome extends React.Component {
  state = {
    email: "",
    password: "",
    show: false,
    switch: false,
    disabledRoomie: false,
    disabledHost: false,
  };
  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  handleChangeHost = () => {
    this.setState({ disabledHost: true, switch: false, disabledRoomie: false });
  };
  handleChangeRoomie = () => {
    this.setState({ disabledRoomie: true, switch: true, disabledHost: false });
  };

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };
  render() {
    const { email, password, show } = this.state;
    const { buttonText, disabled, handleSubmitHost, handleSubmitRoomie } =
      this.props;
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Sign In
        </Button>

        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>SIGN IN</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button
              onClick={this.handleChangeRoomie}
              disabled={this.state.disabledRoomie}
            >
              As a roomie
            </Button>{" "}
            <Button
              onClick={this.handleChangeHost}
              disabled={this.state.disabledHost}
            >
              As a host
            </Button>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                this.state.switch
                  ? handleSubmitRoomie(this.state)
                  : handleSubmitHost(this.state);
              }}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button type="submit">{buttonText}</Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <SingUp />
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ModalHome;
