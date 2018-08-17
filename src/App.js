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
      // <React.Fragment>
      //   <CssBaseline/>
      //     <div className="App">
      //       <header className="App-header">
      //         <h1 className="App-title">Tivity</h1>
      //         <h4>Success Lies On the Other Side Of Fear</h4>
      //         <Journal/>
      //       </header>
      //       <h1>Daily Total = {total}</h1>
      //       <body className="Body">
      //         <Tasks/>
      //         <Goals/>
      //       </body>
      //     </div>
      // </React.Fragment>
    );
  }
}

export default App;
