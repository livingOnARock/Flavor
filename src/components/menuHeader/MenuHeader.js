import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const MenuHeader = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Nav className="m-auto flex-row">
        <Nav.Link as={Link} to="/Menu/" className="m-1">
          Breakfast
        </Nav.Link>
        <Nav.Link as={Link} to="/Menu/LunchDinner" className="m-1">
          Lunch/Dinner
        </Nav.Link>{" "}
        <Nav.Link as={Link} to="/Menu/dessert" className="m-1">
          Desserts
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default MenuHeader;
