import  React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux'
import { register, changeName, changeLastName, changeEmail, changePassword, changeAge } from '../store/roomieReducer'
import { useHistory } from 'react-router-dom'

function SignUpRoomie() {
    const dispatch = useDispatch()
    const history = useHistory()

    const {  loading, error, name, lastName, email, password, age } = useSelector(({ roomieReducer }) => {
        return  {

            loading: roomieReducer.loading,
            error: roomieReducer.error,
            name: roomieReducer.name,
            lastName: roomieReducer.lastName,
            email: roomieReducer.email,
            password: roomieReducer.password,  
            age: roomieReducer.age, 
        } 
    })
   
    function handleSubmit(e){
        e.preventDefault()
        dispatch(register( name, lastName, email, password, age, history))
   }
    
    if (loading) return <p>loding...</p>
    if (error) return <p>user can not be created</p>

     return(
        <div>
      <Container>
        <Row className="justify-content-center">
          <Col className="col-6">
            <Form onSubmit={handleSubmit}> 
              <Form.Group controlId="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                onChange={e => dispatch(changeName(e.target.value))}
                type="text" 
                placeholder="Enter name"
                value={name}
                name="name"
                />
              </Form.Group>
              <Form.Group controlId="LastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                onChange={e => dispatch(changeLastName(e.target.value))}
                type="text" 
                placeholder="Enter last name"
                value={lastName}
                name="lastname"
                />
              </Form.Group>
              <Form.Group controlId="Email">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                onChange={e => dispatch(changeEmail(e.target.value))}
                type="email" 
                placeholder="Enter Email"
                value={email}
                name="email"
                 />
              </Form.Group>
              <Form.Group controlId="Password">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                onChange={e => dispatch(changePassword(e.target.value))}
                type="password" 
                placeholder="Password"
                value={password}
                name="password"
                />
              </Form.Group>
              <Form.Group controlId="Age">
                <Form.Label>Age</Form.Label>
                <Form.Control 
                onChange={e => dispatch(changeAge(e.target.value))}
                type="text" 
                placeholder="Enter Age"
                value={age} 
                name="age"
                />
              </Form.Group>
             
               <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="accept terms" />
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