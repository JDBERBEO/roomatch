import  React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { register, changeName, changeLastName, changeEmail, changePassword, changeAge } from '../store/roomieSignUpReducer'
import { useHistory } from 'react-router-dom'


function SingUpRoomie() {
    const dispatch = useDispatch()
    const history = useHistory()

    const {  loading, error, name, lastName, email, password, age } = useSelector(({ roomieSignUpReducer }) => {
        return  {

            loading: roomieSignUpReducer.loading,
            error: roomieSignUpReducer.error,
            name: roomieSignUpReducer.name,
            lastName: roomieSignUpReducer.lastName,
            email: roomieSignUpReducer.email,
            password: roomieSignUpReducer.password,  
            age: roomieSignUpReducer.age,
            //description: roomieSignUpReducer. description,
        } 
    })
   
    function handleSubmit(e){
        e.preventDefault()
        dispatch(register(name, lastName, email, password, age, history))
   }
    useEffect(() => {
        dispatch(register())
    },[])
    
    if (loading) return <p>loding...</p>
    //if (error) return <p>user can not be created</p>
    console.log(error)
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
             
              
              {/* <Form.Group controlId="formBasicEmail">
                <Form.Label>Personal Description</Form.Label>
                <Form.Control 
                onChange={handleChangeDescription}
                type="text" 
                placeholder="Enter Description" 
                value={description} 
                name="description"
                /> 
              </Form.Group> */}
              { <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="accept terms" />
              </Form.Group> }
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
export default SingUpRoomie