import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import ModalHome from "../components/ModalHome";
import { BeHost } from "../components/BeHost";
import { SignUp } from "../components/SignUp";

import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import React from "react";

export const NavBar = () => {
  const history = useHistory();
  function Logout(){
    localStorage.removeItem('token')
    
    history.push("/");
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">RooMatch</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <ModalHome />

              <BeHost />

              <SignUp />
              <Button
                variant={localStorage.token?"dark":"outline-dark"}
                type="button"
                onClick={Logout}
                disabled={!localStorage.token}
              >
                Logout
              </Button>

              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
