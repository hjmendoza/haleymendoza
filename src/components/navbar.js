import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const NavBar = () => {
  return(
    <Navbar fixed="top" bg="light" expand="lg">
    <Navbar.Brand  className="mr-sm-1" href="#home">Haley Mendoza</Navbar.Brand>
    <Nav className="justify-content-end">
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#resume">Resume</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
  </Navbar>

  )
}

export default NavBar;