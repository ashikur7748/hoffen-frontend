import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FiLogOut} from 'react-icons/fi';
import {GoThreeBars} from 'react-icons/go';


export const Header = () => {
    const redirect = useNavigate();

    const logoutHandle = () => {
    sessionStorage.clear();
    redirect("/login");
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><GoThreeBars /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title={<FiLogOut />} id="basic-nav-dropdown" style={{textAlign:'right'}}>
              <NavDropdown.Item onClick={logoutHandle} >
                Logout
            </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
