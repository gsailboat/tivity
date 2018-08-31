import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';

//import CssBaseline from '@material-ui/core/CssBaseline';
//import Journal from './components/Journal';
//import Tasks from './components/Tasks';
//import Goals from './components/Goals';

//const total = 0;

class App extends Component {
  render() {
    return (
      <div className="Body">
        <ToDoList />
      </div>
    );
  }
}

export default App;