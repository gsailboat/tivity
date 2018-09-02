import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions';
import _ from 'lodash';
import ToDoListItem from './ToDoListItem';
import AddEdit from './AddEdit';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';

class ToDoList extends Component {
    state = {
        addFormVisible: false,
        addFormValue: ""
    };

    handleInputChange = event => {
        this.setState({ addFormValue: event.target.value });
    };

    handleFormSubmit = event => {
        const { addToDo } = this.props;
        event.preventDefault();
        addToDo({ title: this.state.addFormValue});
        this.setState({ addFormValue: "" });
    };

    renderAddForm = () => {
        if (this.state.addFormVisible) {
            return (
                <div>
                    <AddEdit todo={this.props.todo} todoId={this.props.todoId}/>
                </div>
            );
        }
    };

    renderToDos() {
        const { data } = this.props;
        const toDos = _.map(data, (value, key) => {
            return <ToDoListItem key={key} todoId={key} todo={value} />;
        });
        if (!_.isEmpty(toDos)) {
            return <List>{toDos}</List>;
        }
        return (
            <div>
                {_.isEmpty(toDos) ? (
                    <h3>Press Add Button to Add Tasks</h3>
                ) : (
                    <h3>If Completed, Indicate So</h3>
                )}
            </div>
        );
    }

    componentWillMount() {
        this.props.fetchToDos();
    }

    render() {
        const { addFormVisible } = this.state;
        return(
            <div>
                <div>
                    {this.renderAddForm()}
                    {this.renderToDos()}
                </div>
                <div>
                    <Button
                        color='primary'
                        onClick={() => this.setState({addFormVisible: !addFormVisible})}
                    >
                         <b>Add</b>
                     </Button>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = ({ data }) => {
    return {
        data
    };
};

export default connect(mapStatetoProps, actions)(ToDoList);