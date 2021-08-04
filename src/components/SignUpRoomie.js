import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { registerRoomie } from "../store/roomieReducer";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Spinner} from "react-bootstrap";

let schema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("LastName is required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
  age: Yup.number().required().positive().integer(),
  accepTerms: Yup.bool().oneOf([true, "Accept Terms is required"]),
});

function SignUpRoomie() {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { loading, error, name, lastName, email, password, age } = useSelector(
    ({ roomieReducer }) => {
      return {
        loading: roomieReducer.loading,
        error: roomieReducer.error,
        name: roomieReducer.name,
        lastName: roomieReducer.lastName,
        email: roomieReducer.email,
        password: roomieReducer.password,
        age: roomieReducer.age,
      };
    }
  );

  function createRoomie(data) {
    dispatch(
      registerRoomie(
        data.name,
        data.lastName,
        data.email,
        data.password,
        data.age,
        history
      )
    );
    reset();
  }

  if (loading) return (<div><Spinner animation="border" variant="danger" /> <h1 className="text-pink">Loading so Fast</h1></div>);
  if (error) return <p>user can not be created</p>;

  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="col-6">
          <Form noValidate onSubmit={handleSubmit(createRoomie)}>
            <Form.Group controlId="Name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                {...register("name")}
                type="text"
                placeholder="Enter name"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                required
              />
              <p>{!!errors.name && errors.name.message}</p>
            </Form.Group>
            <Form.Group controlId="LastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                {...register("lastName")}
                type="text"
                placeholder="Enter last name"
                className={`form-control ${
                  errors.lastName ? "is-invalid" : ""
                }`}
                required
              />
              <p>{!!errors.lastName && errors.lastName.message}</p>
            </Form.Group>
            <Form.Group controlId="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                {...register("email")}
                type="email"
                placeholder="Enter Email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
              <p>{errors.email?.message}</p>
            </Form.Group>
            <Form.Group controlId="Password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                {...register("password")}
                type="password"
                placeholder="Password"
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
              />
              <p>{errors.password?.message} </p>
            </Form.Group>
            <Form.Group controlId="Age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                {...register("age")}
                type="text"
                placeholder="Enter Age"
                className={`form-control ${errors.age ? "is-invalid" : ""}`}
              />
              <p>{!!errors.age && errors.age.message}</p>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="accept terms"
                className={`form-check-input ${
                  errors.acceptTerms ? "is-invalid" : ""
                }`}
              />
            </Form.Group>
            <br></br>
            <Button variant="danger" type="submit">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUpRoomie;
