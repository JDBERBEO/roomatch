import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { registerHost } from "../store/formHostReducer";
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';


let schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('LastName is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must not exceed 40 characters'),
  age: Yup.number()
    .required()
    .positive()
    .integer(),
  description: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Description is required'),
  profilePhoto: Yup.string()
    .min(2, 'Your Pic!')
    .max(50, 'Too Long!')
    .required('Photo is required'),
  accepTerms: Yup.bool()
    .oneOf([true, 'Accept Terms is required'])
})

function Hostform() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

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
  function createHost(data) {
    dispatch(
      registerHost(
        data.name,
        data.lastName,
        data.email,
        data.password,
        data.age,
        data.description,
        data.profilePhoto,
        history));
    reset()
  };

  if (loading) return <p>loading...</p>;
  if (error) return <p>user can't be created</p>;
  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="col-6">
          <Form onSubmit={handleSubmit(createHost)}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                {...register('name')}
                type="text"
                placeholder="Enter name"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                required
              />
              <p>{!!errors.name && errors.name.message}</p>
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                {...register('lastName')}
                type="text"
                placeholder="Enter last name"
                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                required
              />
              <p>{!!errors.lastName && errors.lastName.message}</p>
            </Form.Group>
            <Form.Group controlId="email" name="email">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                {...register('email')}
                type="email"
                placeholder="Enter Email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                required
              />
              <p>{errors.email?.message}</p>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                {...register('password')}
                type="password"
                placeholder="Password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                required
              />
              <p>{errors.password?.message} </p>
            </Form.Group>
            <Form.Group controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                {...register('age')}
                type="text"
                placeholder="Enter Age"
                className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                required
                positive
                integer
              />
              <p>{!!errors.age && errors.age.message}</p>
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Personal description</Form.Label>
              <Form.Control
                {...register('description')}
                type="text"
                placeholder="Enter your personal description"
                className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                required
              />
              <p>{!!errors.description && errors.description.message}</p>
            </Form.Group>
            <Form.Group controlId="profilePhoto">
              <Form.Label>Photo</Form.Label>
              <Form.Control
                {...register('profilePhoto')}
                type="text"
                placeholder="Photo"
                className={`form-control ${errors.profilePhoto ? 'is-invalid' : ''}`}
                required
              />
              <p>{!!errors.profilePhoto && errors.profilePhoto.message}</p>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="accept terms"
                className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''
                  }`}
                required
              />
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
