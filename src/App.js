import React, { Component } from 'react';

import NavBar from './components/navbar';
import Landing from './components/landing';

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
