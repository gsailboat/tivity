import React, { Component } from "react";
import MaterialIcon from 'material-icons-react';
import IconButton from '@material-ui/core/IconButton'
import { connect } from 'react-redux';
import { deleteToDo } from './../actions';
import { addComplete } from './../actions';

class Buttons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.todo.title,
            editFormVisible: false
        }
    }
    
    handleDeleteClick = deleteToDoId => {
        const { deleteToDo } = this.props;
        deleteToDo(deleteToDoId);
    }

    handleCompleteClick = completeToDoId => {
        const { addComplete } = this.props
        const { deleteToDo } = this.props
        addComplete({ title: this.state.title})
        deleteToDo(completeToDoId);
    }

    // handleEditChange = event => {

    // }

    handleEditClick = () => {
        console.log(this.state.title);
        // return (
        //     <div>
        //             <form onSubmit={this.handleFormSubmit}>
        //                 <div>
        //                     <input
        //                         value={this.state.title}
        //                         onChange={this.handleEditChange}
        //                         id="editCurrent"
        //                         type="text"
        //                     />
        //                     <p>When finished press enter to add it to ToDo List</p>
        //                 </div>
        //             </form>
        //         </div>
        // )
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
                onClick={() => this.handleEditClick(this.state.title)}
            >
                <MaterialIcon icon="edit"/>
            </IconButton>
        </div>
    );
}
}
export default connect(null, { deleteToDo, addComplete })(Buttons);