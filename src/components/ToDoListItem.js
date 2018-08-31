import React, { Component } from "react";
import { connect } from "react-redux";
import { completeToDo } from "./../actions";
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItem from '@material-ui/core/ListItem'
import ListItemText  from '@material-ui/core/ListItemText';

import Buttons from './Buttons';

class ToDoListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            title: this.props.todo.title
        }
    }
    handleCompleteClick = completeToDoId => {
        const { completeToDo } = this.props;
        completeToDo(completeToDoId);
    };

    makeVisible = event => {
        this.setState(prevState => ({
            visible: !prevState.visible
        }));
    }

    render() {
        const { todoId, todo } = this.props;
        return (
                <CssBaseline>
                    <ListItem 
                        button 
                        onClick={() => this.handleCompleteClick(todoId)}
                        onMouseOver={this.makeVisible}
                    >
                        <ListItemText>{todo.title}{" "}</ListItemText>
                        {this.state.visible ? <Buttons /> : null}
                    </ListItem>
                </CssBaseline>
        );
    }
}

export default connect(null, { completeToDo })(ToDoListItem);