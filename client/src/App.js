import React, { Component } from 'react';
import './App.css';
import Theme from './components/colors';
import { CssBaseline} from '@material-ui/core';
import { MuiThemeProvider} from '@material-ui/core/styles';
import Extend from './components/Extend';
import Points from './components/Points';
import Weekly from './components/Weekly';

// const styles = theme => ({
//   home: {
//     backgroundColor: Theme.palette.primary.main
//   },
//   extend: {
//     backgroundColor: Theme.palette.secondary.main
//   }
// })

class App extends Component {
  //const {classes} = this.props;
  render() {
    //const {classes} = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
          <MuiThemeProvider muiTheme={Theme}>
            <div className="Background">
              <Points/>
              <Extend/>
              <Weekly/>
            </div>
          </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

// App.propTypes ={
//   classes: PropTypes.object.isRequired
// }

export default App;