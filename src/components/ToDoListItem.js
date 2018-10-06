import React, { Component } from "react";
import ListItem from '@material-ui/core/ListItem'
import ListItemText  from '@material-ui/core/ListItemText';
import moment from 'moment';
import Buttons from './Buttons';

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
        return (
                    <div
                        onMouseEnter={this.makeVisible(true)}
                        onMouseLeave={this.makeVisible(false)}
                    >
                    <ListItem
                        button
                        style={{height: "100px"}}
                    >
                        <ListItemText>{this.props.todo.title}{" "}</ListItemText>
                        <ListItemText>{moment(this.props.todo.time).fromNow()}</ListItemText>
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