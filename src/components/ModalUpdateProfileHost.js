import React, { useState, useEffect } from "react";

import { Form, Button, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { updateProfileHost } from "../store/getShowProfileHostReducer";

function ModalUpdateProfile() {
  const dispatch = useDispatch();

  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [show, setShow] = useState(false);

  const selectImage = (e) => {
    setFile(e.target.files[0]);
    readFile(e.target.files[0]);
  };

  const readFile = (file) => {
    const fileReader = new FileReader();

    fileReader.onload = (e) => setImage(e.target.result);
    fileReader.onerror = (e) => console.log(fileReader.error);

    fileReader.readAsDataURL(file);
  };

  const { loading, error, dataProfile } = useSelector(
    ({ getProfileHostReducer }) => {
      return {
        loading: getProfileHostReducer.loading,
        error: getProfileHostReducer.error,
        dataProfile: getProfileHostReducer.profile,
      };
    }
  );

  const [name, setName] = useState(dataProfile.name);
  // console.log("name", name);
  const [lastName, setLastName] = useState(dataProfile.lastName);
  // console.log("lastname", lastName);
  const [email, setEmail] = useState(dataProfile.email);
  // console.log("email", email);
  const [password, setPassword] = useState(dataProfile.password);
  // console.log("password", password);
  const [age, setAge] = useState(dataProfile.age);
  // console.log("age", age);
  const [description, setDescription] = useState(dataProfile.description);
  // console.log("description", description);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("namedesde submit", name);
    const data = new FormData();
    data.append("name append", name);
    data.append("lastName", lastName);
    data.append("email", email);
    data.append("password", password);
    data.append("age", age);
    data.append("description", description);
    if (file) {
      data.append("profilePhoto", file, file.name);
    }

    // console.log("data desde handle submit", data);

    for (var pair of data.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    dispatch(updateProfileHost(data));
    setShow(false);
  }

  if (loading) return <p>loading...</p>;
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
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder={"Enter name"}
                value={name}
                name="name"
              />
            </Form.Group>
            <Form.Group controlId="LastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Enter last name"
                value={lastName}
                name="lastname"
              />
            </Form.Group>
            <Form.Group controlId="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter Email"
                value={email}
                name="email"
              />
            </Form.Group>
            <Form.Group controlId="Password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                value={password}
                name="password"
              />
            </Form.Group>
            <Form.Group controlId="Age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                onChange={(e) => setAge(e.target.value)}
                type="text"
                placeholder="Enter Age"
                value={age}
                name="age"
              />
            </Form.Group>
            <Form.Group controlId="Description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="Enter Description"
                value={description}
                name="description"
              />
            </Form.Group>

            {/* CHANGE PROFILE PHOTO */}
            <Form.Group>
              {image && <img src={image} alt="preview" />}
              <Form.Label>Change Profile Photo</Form.Label>
              <Form.Control
                type="file"
                id="HostPorfilePicture"
                onChange={selectImage}
                accept="image/*"
              ></Form.Control>
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
