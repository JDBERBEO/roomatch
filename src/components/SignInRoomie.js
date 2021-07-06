import  React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux'
import { login, changeEmail, changePassword } from '../store/roomieSignInReducer'
import { useHistory } from 'react-router-dom'


function SignInRoomie() {
    const dispatch = useDispatch()
    const history = useHistory()

    const { loading, error, email, password } = useSelector(({ roomieReducer }) => {
        return  {
            loading: roomieReducer.loading,
            error: roomieReducer.error,
            email: roomieReducer.email,
            password: roomieReducer.password,  
        } 
    })
   
    function handleSubmit(e){
        e.preventDefault()
        dispatch(login( email, password, history))
   }
    
    if (loading) return <p>loding...</p>
    if (error) return <p>User can`t login...</p>
     return(
        <div>
      <Container>
        <Row className="justify-content-center">
          <Col className="col-6">
            <Form onSubmit={handleSubmit}> 
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
              <Button 
                variant="primary" 
                type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
    )
}
export default SignInRoomie