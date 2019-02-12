import React, {Component} from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
// import '../styles/navbar.css'

import Landing from './components/landing';
import NavBar from './components/navbar'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Landing />

      </div>
    );
  }
}

export default App;
