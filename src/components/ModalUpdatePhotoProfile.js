import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { updateProfilePhoto } from "../store/profileReducer";

export const RoomieProfilePictureEdit = () => {
  const dispatch = useDispatch();

  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [show, setShow] = useState(false);

  function selectImage(e) {
    setFile(e.target.files[0]);
    generetePreview(e.target.files[0]);
  }

  function generetePreview(file) {
    const fileReader = new FileReader();
    fileReader.onload = (e) => setImage(e.target.result);
    fileReader.onerror = (e) => console.log(fileReader.error);
    fileReader.readAsDataURL(file);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateProfilePhoto(file));
    setShow(false);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" className="waves-effect waves-white text-white" onClick={handleShow}>
        Edit Photo
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit photo</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          {image && <img src={image} alt="preview" />}
          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Profile Photo</Form.Label>
            <Form.Control
              type="file"
              id="file"
              onChange={selectImage}
              accept="image/*"
            />
          </Form.Group>
          <Button variant="danger" className="waves-effect waves-white text-white" type="submit">Save</Button>
        </Form>
        <Modal.Footer>
          <Button variant="danger" className="waves-effect waves-white text-white"  onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
