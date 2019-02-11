import React, { Component } from 'react';

import NavBar from './components/navbar';
import Landing from './components/landing';

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
