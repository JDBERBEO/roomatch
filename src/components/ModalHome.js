import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { SignUp2 } from "./SignUp2";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loginHost,
  loginRoomie,
  changeEmail,
  changePassword,
  changeHandleHost,
  changeHandleRoomie,
  changeShow,
  changeClose,
} from "../store/hostSignInReducer";
import { useHistory } from "react-router-dom";

function ModalHome() {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    loading,
    error,
    email,
    password,
    show,
    switch_rol,
    disabledRoomie,
    disabledHost,
  } = useSelector(({ hostSignInReducer }) => {
    return {
      loading: hostSignInReducer.loading,
      error: hostSignInReducer.error,
      email: hostSignInReducer.email,
      password: hostSignInReducer.password,
      show: hostSignInReducer.show,
      switch_rol: hostSignInReducer.switch_rol,
      disabledRoomie: hostSignInReducer.disabledRoomie,
      disabledHost: hostSignInReducer.disabledHost,
    };
  });
  function handleSubmitRoomie(e) {
    e.preventDefault();
    dispatch(
      loginRoomie(
        email,
        password,
        show,
        switch_rol,
        disabledRoomie,
        disabledHost,
        history
      )
    );
  }

  function handleSubmitHost(e) {
    e.preventDefault();
    dispatch(
      loginHost(
        email,
        password,
        show,
        switch_rol,
        disabledRoomie,
        disabledHost,
        history
      )
    );
  }

  if (loading) return <p>loading...</p>;
  if (error) return <p>user can't be created</p>;

  return (
    <div>
      <Button variant="outline-light" onClick={() => dispatch(changeShow())}>
        Sign In
      </Button>
      <Modal
        show={show}
        onHide={() => {
          dispatch(changeClose());
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>SIGN IN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button
            variant="danger"
            onClick={() =>
              dispatch(() => {
                dispatch(changeHandleRoomie());
              })
            }
            disabled={disabledRoomie}
          >
            As a roomie
          </Button>{" "}
          <Button
            variant="danger"
            onClick={() => {
              dispatch(changeHandleHost());
            }}
            disabled={disabledHost}
          >
            As a host
          </Button>
          <Form onSubmit={switch_rol ? handleSubmitRoomie : handleSubmitHost}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={(e) => dispatch(changeEmail(e.target.value))}
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
                onChange={(e) => dispatch(changePassword(e.target.value))}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
              <br></br>
              <div class="divider"></div>
            </Form.Group>
            {/* <Button variant="danger" type="submit">Sign In</Button> */}
            <div class="row">
              <div class="col"><Button variant="danger" type="submit">Sign In</Button></div>
              <div class="col"><SignUp2 /></div>
              <div class="col"><Button
                variant="danger"
                onClick={() => {
                dispatch(changeClose());
                }}
                >
                Close
              </Button></div>
            </div>
            
          </Form>
        </Modal.Body>
      </Modal>
      <div class="section"></div>
      <br></br>
    </div>
  );
}

export default ModalHome;
