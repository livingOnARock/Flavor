import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const AppNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand as={Link} to="/">
        FLAVOR
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            HOME
          </Nav.Link>
          <Nav.Link as={Link} to="/Menu">
            MENU
          </Nav.Link>
          <Nav.Link as={Link} to="/Locations">
            LOCATIONS
          </Nav.Link>
          <Nav.Link as={Link} to="/About">
            INFO
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/Contact" className="btn">
            CONTACT
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
