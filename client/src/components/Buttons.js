import React, { Component } from "react";
import MaterialIcon from 'material-icons-react';
import { IconButton } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles'
import Theme from './colors/'
import { connect } from 'react-redux';
import { deleteToDo, addComplete} from './../actions';
import AddEdit from './AddEdit';
import moment from 'moment';


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
        const time = moment().diff(this.props.todo.time, 'hours') / 24;
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
    //const classes = this.props;
    return (
        <MuiThemeProvider theme={Theme}>
            {/* <div style={{display: "inline-block"}}> */}
                    <IconButton
                        onClick={() => this.handleDeleteClick(this.props.todoId)}
                        disabled={start >= 24 ? true : false}
                        // color= {Theme.palette.secondary}
                    >
                        <MaterialIcon icon="delete"/>
                    </IconButton>
                    <IconButton 
                        onClick={() => this.handleCompleteClick(this.props.todoId)}
                        // color= {Theme.palette.secondary}
                    >
                        <MaterialIcon icon="done"/>
                    </IconButton>
                    <IconButton
                        onClick={this.handleEditClick}
                        disabled={start >= 24 ? true : false}
                        // color= {Theme.palette.secondary}
                    >
                        <MaterialIcon icon="edit"/>
                    </IconButton>
                    {this.renderModal()}
            {/* </div> */}
        </MuiThemeProvider>
    );
}
}
export default connect(null, { deleteToDo, addComplete })(Buttons);