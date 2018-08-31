import React, { Component } from "react";
import MaterialIcon from 'material-icons-react';
import IconButton from '@material-ui/core/IconButton'
import { connect } from 'react-redux';
import { deleteToDo } from './../actions';
import { addComplete } from './../actions';

class Buttons extends Component {
    constructor(props) {
        super(props)
        console.log(props.todoId);
        this.state = {
            title: this.props.todo.title
        }
    }
    
    handleDeleteClick = deleteToDoId => {
        const { deleteToDo } = this.props;
        deleteToDo(deleteToDoId);
        console.log("fired");
    }

    handleCompleteClick = completeToDoId => {
        const { addComplete } = this.props
        const { deleteToDo } = this.props
        addComplete({ title: this.state.title})
        deleteToDo(completeToDoId);
    }

render() {
    return (
        <div style={{display: "inline-block"}}>
            <IconButton
                onClick={() => this.handleDeleteClick(this.props.todoId)}
            >
                <MaterialIcon icon="delete"/>
            </IconButton>
            <IconButton 
                onClick={() => this.handleCompleteClick(this.props.todoId)}
            >
                <MaterialIcon icon="done"/>
            </IconButton>
            <IconButton>
                <MaterialIcon icon="edit"/>
            </IconButton>
        </div>
    );
}
}
export default connect(null, { deleteToDo, addComplete })(Buttons);