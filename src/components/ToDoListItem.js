import React, { Component } from "react";
import ListItem from '@material-ui/core/ListItem'
import ListItemText  from '@material-ui/core/ListItemText';

import Buttons from './Buttons';

class ToDoListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    makeVisible = event => {
        this.setState(prevState => ({
            visible: !prevState.visible
        }));
    }

    render() {
        return (
                    <div
                        onMouseEnter={this.makeVisible}
                        onMouseLeave={this.makeVisible}
                    >
                    <ListItem
                        button
                        style={{height: "100px"}}
                    >
                        <ListItemText>{this.props.todo.title}{" "}</ListItemText>
                        {this.state.visible ?
                            <Buttons
                                style={{height: "100px"}}
                                todo={this.props.todo}
                                todoId={this.props.todoId}
                            />
                            : null}
                    </ListItem>
                </div>
        );
    }
}

export default ToDoListItem;