import React from 'react';
// import { Navbar, NavItem, Link } from 'react-bootstrap';
import { BrowserRouter, Route, Link } from 'react-router-dom';
// import '../styles/navbar.css'

import Landing from './components/landing.js';
import NavBar from './components/navbar.js';
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
    <div className="App">
      <NavBar />
      <div className="text-center">
        <div className="children">
          <div className="container">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Route exact path="/" component={Landing} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
          </div>
        </div>
      </div>
    </div>
  </BrowserRouter>
    )
  }
}

export default App;
