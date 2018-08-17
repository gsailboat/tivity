import React, { Component } from "react";
import { connect } from "react-redux";
import { completeToDo } from "./../actions";
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItem from '@material-ui/core/ListItem'
import ListItemText  from '@material-ui/core/ListItemText';

class ToDoListItem extends Component {
    handleCompleteClick = completeToDoId => {
        const { completeToDo } = this.props;
        completeToDo(completeToDoId);
    };

    render() {
        const { todoId, todo } = this.props;
        return (
                <CssBaseline>
                    <ListItem button onClick={() => this.handleCompleteClick(todoId)}>
                        <ListItemText>{todo.title}{" "}</ListItemText>
                    </ListItem>
                </CssBaseline>
        );
    }
}

export default connect(null, { completeToDo })(ToDoListItem);