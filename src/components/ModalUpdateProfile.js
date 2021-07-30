import React, { useState } from "react";

import { Form, Button, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../store/profileReducer";

function ModalUpdateProfile() {
  const dispatch = useDispatch();

  const { loading, error, dataProfile } = useSelector(({ ProfileReducer }) => {
    return {
      loading: ProfileReducer.loading,
      error: ProfileReducer.error,
      dataProfile: ProfileReducer.profile,
    };
  });

  const [profile, setProfile] = useState(dataProfile);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateProfile(profile));
    setShow(false);
  }

  const [show, setShow] = useState(false);

  if (loading) return <p>loding...</p>;
  if (error) return <p>user can not be created</p>;

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Edit Profile
      </Button>
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Intro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="Name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setProfile({ ...profile, name: e.target.value })
                }
                type="text"
                placeholder={"Enter name"}
                value={profile.name}
                name="name"
              />
            </Form.Group>
            <Form.Group controlId="LastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setProfile({ ...profile, lastName: e.target.value })
                }
                type="text"
                placeholder="Enter last name"
                value={profile.lastName}
                name="lastname"
              />
            </Form.Group>
            <Form.Group controlId="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setProfile({ ...profile, email: e.target.value })
                }
                type="email"
                placeholder="Enter Email"
                value={profile.email}
                name="email"
              />
            </Form.Group>
            <Form.Group controlId="Password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setProfile({ ...profile, password: e.target.value })
                }
                type="password"
                placeholder="Password"
                value={profile.password}
                name="password"
              />
            </Form.Group>
            <Form.Group controlId="Age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setProfile({ ...profile, age: e.target.value })
                }
                type="text"
                placeholder="Enter Age"
                value={profile.age}
                name="age"
              />
            </Form.Group>
            <Form.Group controlId="Description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setProfile({ ...profile, description: e.target.value })
                }
                type="text"
                placeholder="Enter Description"
                value={profile.description}
                name="description"
              />
            </Form.Group>
            <Button type="submit">Save</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setShow(false);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalUpdateProfile;
