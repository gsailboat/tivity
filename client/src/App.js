import React, { Component } from 'react';
import './App.css';
import Extend from './components/Extend';
import Points from './components/Points';

class App extends Component {
  render() {
    return (
      <div className="Body">
        <Points/>
        <Extend />
      </div>
    );
  }
}

export default App;