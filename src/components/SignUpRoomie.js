import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux'
import { registerRoomie, changeName, changeLastName, changeEmail, changePassword, changeAge } from '../store/roomieReducer'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


function SignUpRoomie() {
  const dispatch = useDispatch()
  const history = useHistory()

  const { loading, error, name, lastName, email, password, age } = useSelector(({ roomieReducer }) => {
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

  let validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    lastName: yup.string().required('LastName is required'),
    email: yup.string().email('Email is invalid'),
    password: yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    age: yup.number().required().positive().integer(),
    accepTerms: yup.bool().oneOf([true, 'Accept Terms is required'])
  })

  const {
    register,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  })

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(registerRoomie(name, lastName, email, password, age, history))
  }

  if (loading) return <p>loding...</p>
  if (error) return <p>user can not be created</p>

  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col className="col-6">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  {...register('name')}
                  onChange={e => dispatch(changeName(e.target.value))}
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  name="name"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                />
                <Form.Group className="invalid-feedback">{errors.name?.message} </Form.Group>
              </Form.Group>
              <Form.Group controlId="LastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  {...register('lastName')}
                  onChange={e => dispatch(changeLastName(e.target.value))}
                  type="text"
                  placeholder="Enter last name"
                  value={lastName}
                  name="lastname"
                  className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                />
                <Form.Group className="invalid-feedback">{errors.LastName?.message} </Form.Group>
              </Form.Group>
              <Form.Group controlId="Email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  {...register('email')}
                  onChange={e => dispatch(changeEmail(e.target.value))}
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  name="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                />
              </Form.Group>
              <Form.Group controlId="Password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  {...register('password')}
                  onChange={e => dispatch(changePassword(e.target.value))}
                  type="password"
                  placeholder="Password"
                  value={password}
                  name="password"
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                />
              </Form.Group>
              <Form.Group controlId="Age">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  {...register('acceptTerms')}
                  onChange={e => dispatch(changeAge(e.target.value))}
                  type="text"
                  placeholder="Enter Age"
                  value={age}
                  name="age"
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
    </div>
  )
}
export default SignUpRoomie