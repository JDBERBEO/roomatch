import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export const HostProfilePictureEditMain = () => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("profilePhoto", file, file.name);

    const token = localStorage.getItem("token");
    const response = axios({
      method: "POST",
      baseURL: "http://localhost:8000",
      url: "/roomie/profile/",
      data,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("response", response);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {image && <img src={image} alt="preview" />}
        <Form.Group>
          <Form.Label>Change Profile Photo</Form.Label>
          <Form.Control
            type="file"
            id="HostPorfilePicture"
            onChange={selectImage}
            accept="image/*"
          ></Form.Control>
        </Form.Group>
        <Button type="submit">Save photo</Button>
      </Form>
    </>
  );
};
