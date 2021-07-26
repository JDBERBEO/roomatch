import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux'
import { registerRoomie, changeName, changeLastName, changeEmail, changePassword, changeAge } from '../store/roomieReducer'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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
  accepTerms: Yup.bool()
    .oneOf([true, 'Accept Terms is required'])
})

function SignUpRoomie() {
  const dispatch = useDispatch()
  const history = useHistory()


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors } } = useForm({ resolver: yupResolver(schema) })

  const {
    loading,
    error,
    name,
    lastName,
    email,
    password,
    age } = useSelector(({ roomieReducer }) => {
      return {

        loading: roomieReducer.loading,
        error: roomieReducer.error,
        name: roomieReducer.name,
        lastName: roomieReducer.lastName,
        email: roomieReducer.email,
        password: roomieReducer.password,
        age: roomieReducer.age,
      }
    })

  function createRoomie(data) {
    // dispatch(registerRoomie(name, lastName, email, password, age, history))
    console.log(data)
    reset();
  }

  if (loading) return <p>loding...</p>
  if (error) return <p>user can not be created</p>

  return (

    <Container>
      <Row className="justify-content-center">
        <Col className="col-6">
          <Form noValidate onSubmit={handleSubmit(createRoomie)}>
            <Form.Group controlId="Name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                {...register('name')}
                // type="text"
                // name="name"
                // placeholder="Enter name"
                // value={name}
                // onChange={e => dispatch(changeName(e.target.value))}
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              />
              <p>{!!errors.name && errors.name.message}</p>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="LastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                {...register('lastName')}
                // type="text"
                // name="lastname"
                // placeholder="Enter last name"
                // value={lastName}
                // onChange={e => dispatch(changeLastName(e.target.value))}
                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                {...register('email')}
                // type="email"
                // placeholder="Enter Email"
                // value={email}
                // name="email"
                // onChange={e => dispatch(changeEmail(e.target.value))}
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              />
            </Form.Group>
            <Form.Group controlId="Password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                {...register('password')}
                type="password"
                // placeholder="Password"
                // value={password}
                // name="password"
                // onChange={e => dispatch(changePassword(e.target.value))}
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              />
            </Form.Group>
            <Form.Group controlId="Age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                {...register('age')}
                // onChange={e => dispatch(changeAge(e.target.value))}
                // type="text"
                // placeholder="Enter Age"
                // value={age}
                // name="age"
                className={`form-control ${errors.age ? 'is-invalid' : ''}`}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="accept terms"
                className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''
                  }`}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default SignUpRoomie