import React, { Component } from "react";
import MaterialIcon from 'material-icons-react';
import { IconButton } from '@material-ui/core';
import Theme from './colors/';
import { connect } from 'react-redux';
import { deleteToDo, addComplete} from './../actions';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AddEdit from './AddEdit';
import moment from 'moment';

const styles = theme => ({
    size: {
        // height: "10vh",
        display: "inline-block"
    },
    darkbuttons: {
        backgroundColor: Theme.palette.secondary.main
    },
    lightbuttons: {
        backgroundColor: Theme.palette.secondary.light
    }
})

class Buttons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editFormVisible: false,
        }
    }
    
    handleDeleteClick = deleteToDoId => {
        const { deleteToDo } = this.props;
        deleteToDo(deleteToDoId);
    }

    handleCompleteClick = completeToDoId => {
        const time = Math.round(moment().diff(this.props.todo.time, 'hours') / 24);
        const point = time < 4 ? Math.abs(time - 4) : 0.5;
        const { addComplete } = this.props;
        const { deleteToDo } = this.props;
        addComplete({
            title: this.props.todo.title,
            creationTime: this.props.todo.time,
            completionTime: moment().format(),
            daysLate: time,
            points: point
        })
        deleteToDo(completeToDoId);
    }

    handleEditClick = () => {
        this.setState({
            editFormVisible: true
        })
    }

    renderModal = () => {
        if (this.state.editFormVisible) {
            return (
                <div>
                    <AddEdit
                        todoId={this.props.todoId}
                        todo={this.props.todo}
                        reset={() => this.setState({editFormVisible: false})}
                    />
                </div>
            )
        }
    }

render() {
    const start = moment().diff(this.props.todo.time, 'hours');
    const classes = this.props;

    return (
        <MuiThemeProvider theme={Theme}>
            <div className={classes.size}>
                    <IconButton
                        onClick={() => this.handleDeleteClick(this.props.todoId)}
                        disabled={start >= 24 ? true : false}
                        color={classes.darkbuttons}
                        variant='contained'
                    >
                        <MaterialIcon icon="delete"/>
                    </IconButton>
                    <IconButton 
                        onClick={() => this.handleCompleteClick(this.props.todoId)}
                        color={classes.lightbuttons}
                        variant='contained'
                    >
                        <MaterialIcon icon="done"/>
                    </IconButton>
                    <IconButton
                        onClick={this.handleEditClick}
                        disabled={start >= 24 ? true : false}
                        color= {classes.darkbuttons}
                        variant='contained'
                    >
                        <MaterialIcon icon="edit"/>
                    </IconButton>
                    {this.renderModal()}
            </div>
        </MuiThemeProvider>
        );
    }
}

Buttons.propTypes ={
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(connect(null, { deleteToDo, addComplete })(Buttons));