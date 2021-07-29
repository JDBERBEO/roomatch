import React from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";

export const RoomieProfilePictureEdit = () => {
  const [file, setFile] = useState(null);
  //recibe un objeto que representa la imagen este setfile sirve para enviar la imag al backend
  const [image, setImage] = useState(null);
  //

  function changeProfilePhoto(e) {
    setFile(e.target.files[0]);
    generetePreview(e.target.files[0]);
    //selecione la imagen y que le pase un archivo en la posicion 0
    console.dir(e.target);
  }

  function generetePreview(file) {
    const fileReader = new FileReader();

    //file reader va a estar escuchando on load recibe una asignacón.(que evento escucha y que callback recibe )
    fileReader.onload = (e) => setImage(e.target.result);
    fileReader.onerror = (e) => console.log(fileReader.error);

    //leer diferentes archivos como un bufer pero que lo lea con una url que contiene una data.
    fileReader.readAsDataURL(file);
    //2 forma de hacerlo con URL
    // const result = URL.createObjectURL(file)
    // setImage(result)
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    //ya por que hay una foto hay que hacer todos los campos formdata
    if (file) {
      data.append("profilePhoto", file, file.name);
    }

    //no se envia con json se envia con FORMDATA para hacer peticiones http


    const token = localStorage.getItem("token");
    const response = axios({
      method: "PUT",
      baseURL: "http://localhost:8000",
      url: '/profilePic',
      data,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("response", response);
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
      <Button type="submit">Save photo</Button>
    </Form>
  );
};
