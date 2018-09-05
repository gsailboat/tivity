import React, { Component } from "react";
import MaterialIcon from 'material-icons-react';
import IconButton from '@material-ui/core/IconButton'
import { connect } from 'react-redux';
import { deleteToDo } from './../actions';
import { addComplete } from './../actions';
import AddEdit from './AddEdit';

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
        const { addComplete } = this.props
        const { deleteToDo } = this.props
        addComplete({ title: this.props.todo.title})
        deleteToDo(completeToDoId);
    }

    handleEditClick = () => {
        console.log("Edit " + this.state.editFormVisible)
        this.setState({
            editFormVisible: true
        })
    }

    renderModal = () => {
        if (this.state.editFormVisible) {
            return (
                <div>
                    <AddEdit todoId={this.props.todoId} todo={this.props.todo} />
                </div>
            )
        }
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
            <IconButton
                onClick={this.handleEditClick}
            >
                <MaterialIcon icon="edit"/>
            </IconButton>
            {this.renderModal()}
        </div>
    );
}
}
export default connect(null, { deleteToDo, addComplete })(Buttons);