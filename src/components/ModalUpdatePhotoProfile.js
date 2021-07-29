import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux'
import { updateProfilePhoto } from '../store/profileReducer'



export const RoomieProfilePictureEdit = () => {
    const dispatch = useDispatch();

    const [file, setFile] = useState(null);
    //recibe un objeto que representa la imagen este setfile sirve para enviar la imag al backend
    const [image, setImage] = useState(null);
    const [show, setShow] = useState(false);


    function selectImage(e) {
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
        dispatch(updateProfilePhoto(file))
        setShow(false)
    }


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
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
                    <Button type="submit">Save</Button>
                </Form>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
