import React, { Component } from "react";
import ListItem from '@material-ui/core/ListItem'
import ListItemText  from '@material-ui/core/ListItemText';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Theme from "./colors"
import moment from 'moment';
import Buttons from './Buttons';

const styles = theme => ({
    items: {
        // backgroundColor: Theme.palette.primary.light,
        "&:hover": {
            backgroundColor: Theme.palette.primary.light
        },
        height: '15vh',
    },
    test: {
        backgroundColor: Theme.palette.secondary.main
    }
})

class ToDoListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    makeVisible = value => event => {
        this.setState({
            visible: value
        });
    }

    render() {
        // var a = this.props.todo.time;
        // var b = moment().format();
        // console.log(moment.duration(a.diff(b)));
        const {classes} = this.props;

        return (
            <MuiThemeProvider theme={Theme}>
                <div
                    onMouseEnter={this.makeVisible(true)}
                    onMouseLeave={this.makeVisible(false)}
                >
                    <ListItem
                        button
                        className={classes.items}
                    >
                        <ListItemText>{this.props.todo.title}{" "}</ListItemText>
                        <ListItemText>{moment(this.props.todo.time).fromNow()}</ListItemText>
                        {this.state.visible ?
                            <Buttons
                                todo={this.props.todo}
                                todoId={this.props.todoId}
                                className={classes.test}
                            />
                            : null}
                    </ListItem>
                </div>
            </MuiThemeProvider>
        );
    }
}

ToDoListItem.propTypes ={
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ToDoListItem);