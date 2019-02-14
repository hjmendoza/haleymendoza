import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap'; 
import { LinkContainer } from 'react-router-bootstrap';
import '../styles/navbar.css'


const NavBar = () => {
  return(
    <Navbar fixed="top" bg="light">
    <Navbar.Brand  className="mr-sm-1" href="/">Haley Mendoza</Navbar.Brand>
  
      <LinkContainer to="/about">
        <NavItem>About</NavItem>
      </LinkContainer>

      <LinkContainer to="/projects">
        <NavItem>Projects</NavItem>
      </LinkContainer>

      <LinkContainer to="/resume">
        <NavItem>Resume</NavItem>
      </LinkContainer>

  </Navbar>
  )
}

export default NavBar;