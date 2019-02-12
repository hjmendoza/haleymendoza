import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
// import '../styles/navbar.css'

import Landing from './components/landing.js';
import About from './components/about.js';
import Projects from './components/projects.js';
import Resume from './components/resume.js';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/resume" component={Resume} />
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
      {/* <Nav>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>
          <Nav.Link class="ml-auto" className="contact" href="#contact">Contact</Nav.Link>
      </Nav> */}
    </Navbar>
    </Switch>
    </BrowserRouter>
    )
  }
}

export default App;
