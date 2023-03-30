import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

export default function TopNavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            src="/assets/images/logo/logo.png"
            width="70"
            height="70"
            className="d-inline-block align-top"
            alt="Hoffen"
          />
        </Navbar.Brand>
        {/* <Navbar.Brand as={NavLink} to="/">HOFFEN</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <NavDropdown title="Company" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/about">About Us</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/source">Source / Our Partner</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Product" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/diagnostic">Diagnostic</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/surgical">Surgical</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/others">Others</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="News & Event" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/news">News</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/event">Event</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/distributor">Clients</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
            <Nav.Link as={NavLink} to="/support">Support</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
