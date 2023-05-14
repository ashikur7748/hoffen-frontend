import { React, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import { showCategory, showSubCategory } from '../../admin/api/Axios';
import { apiCategoryShow, apiSubCategoryShow } from '../../admin/api/ApiList';


export default function TopNavBar() {
  const navigate = useNavigate();
  const [categoryList, setCategoryList] = useState([]);
  const [subCategorytList, setSubCategoryList] = useState([]);

  useEffect(() => {
    showCategory(apiCategoryShow)
      .then((response) => {
        setCategoryList(response.data);
      })
      .catch(({ message }) => {
        navigate(`/errorpageprivate/${message}`);
      });
  }, []);

  useEffect(() => {
    showSubCategory(apiSubCategoryShow)
      .then((response) => {
        setSubCategoryList(response.data);
      })
      .catch(({ message }) => {
        navigate(`/errorpageprivate/${message}`);
      });
  }, []);
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
            <Nav.Link as={NavLink} to="/products" className='products'>
              Products

              {/* <ul class="dropdown-menu product_category_box">
                {
                  categoryList && categoryList.map((item, index) => (
                    <li><Link class="dropdown-item" to={"products/cat_id/" + item.id} state={item.name} >{item.name}</Link></li>
                  ))
                }
              </ul> */}
            </Nav.Link>
            {/* <NavDropdown title="Product" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/products/2">Products</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/diagnostic">Diagnostic</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/surgical">Surgical</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/others">Others</NavDropdown.Item>
            </NavDropdown> */}
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
