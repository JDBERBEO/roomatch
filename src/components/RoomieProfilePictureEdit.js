import React from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";

export const RoomieProfilePictureEdit = () => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);

  function changeProfilePhoto(e) {
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
    const data = new FormData();

    if (file) {
      data.append("profilePhoto", file, file.name);
    }

    const token = localStorage.getItem("token");
    const response = axios({
      method: "PUT",
      baseURL: "http://localhost:8000",
      url: "/profilePic",
      data,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      {image && <img src={image} alt="preview" />}
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Profile Photo</Form.Label>
        <Form.Control
          type="file"
          id="file"
          multiple
          onChange={changeProfilePhoto}
          accept="image/*"
        />
      </Form.Group>
      <Button variant="danger" className="waves-effect waves-white text-white" type="submit">Save photo</Button>
    </Form>
  );
};
