import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Button from "react-bootstrap/Button"


function Navbar() {
  return (
    <Jumbotron>
      <h1>Microblog </h1>
      <p>
        Get into the <b>Rithm</b> of blogging!... get it?
  </p>
      <Nav
        activeKey="/"
      // onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Button variant="white">
            <NavLink to="/">blog</NavLink>
          </Button>
        </Nav.Item>
        <Nav.Item>
          <Button variant="white">
            <NavLink to="/new">Add a new post</NavLink>
          </Button>
        </Nav.Item>

      </Nav>
    </Jumbotron >
  )
}
export default Navbar;