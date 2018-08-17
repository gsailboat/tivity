import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemText  from '@material-ui/core/ListItemText';

class Tasks extends Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <div>
                <h4>Tasks</h4>
                <List>
                  <ListItem button>
                    <ListItemText primary="1"/>
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="2"/>
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="3"/>
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="4"/>
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="5"/>
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="6"/>
                  </ListItem>
                </List>
                <Button color='primary'>
                  Edit
                </Button>
              </div>
            </React.Fragment>
        );
    }
}

export default Tasks;