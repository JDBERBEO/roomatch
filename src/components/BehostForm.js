import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  register,
  changeName,
  changeLastName,
  changeEmail,
  changePassword,
  changeAge,
  changePersonalDescription,
  changeProfilePhoto,
} from "../store/formHostReducer";
import { useHistory } from "react-router-dom";

function Hostform() {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    loading,
    error,
    name,
    lastName,
    email,
    password,
    age,
    description,
    profilePhoto,
  } = useSelector(({ formHostReducer }) => {
    return {
      loading: formHostReducer.loading,
      error: formHostReducer.error,
      name: formHostReducer.name,
      lastName: formHostReducer.lastName,
      email: formHostReducer.email,
      password: formHostReducer.password,
      age: formHostReducer.age,
      description: formHostReducer.description,
      profilePhoto: formHostReducer.profilePhoto,
    };
  });
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      register(
        name,
        lastName,
        email,
        password,
        age,
        description,
        profilePhoto,
        history
      )
    );
  }
  if (loading) return <p>loading...</p>;
  if (error) return <p>user can't be created</p>;
  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="col-6">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                onChange={(e) => dispatch(changeName(e.target.value))}
                value={name}
              />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                name="lastName"
                onChange={(e) => dispatch(changeLastName(e.target.value))}
                value={lastName}
              />
            </Form.Group>
            <Form.Group controlId="email" name="email">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={(e) => dispatch(changeEmail(e.target.value))}
                value={email}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => dispatch(changePassword(e.target.value))}
                value={password}
              />
            </Form.Group>
            <Form.Group controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter age"
                name="age"
                onChange={(e) => dispatch(changeAge(e.target.value))}
                value={age}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Personal description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your personal description"
                name="description"
                onChange={(e) =>
                  dispatch(changePersonalDescription(e.target.value))
                }
                value={description}
              />
            </Form.Group>
            <Form.Group controlId="profilePhoto">
              <Form.Label>Photo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter photo"
                name="profilePhoto"
                onChange={(e) => dispatch(changeProfilePhoto(e.target.value))}
                value={profilePhoto}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="danger" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Hostform;
