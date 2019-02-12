import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// import '../styles/navbar.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const NavBar = () => {
  return(
    <Navbar fixed="top" bg="light">
    <Navbar.Brand  className="mr-sm-1" Link to={'/'}>Haley Mendoza</Navbar.Brand>
    <Nav>
        <Nav.Link Link to={'/about'}>About</Nav.Link>
        <Nav.Link Link to={'/projects'}>Projects</Nav.Link>
        <Nav.Link Link to={'/resume'}>Resume</Nav.Link>
        <Nav.Link class="ml-auto" className="contact" href="#contact">Contact</Nav.Link>
    </Nav>
  </Navbar>

  )
}

export default NavBar;