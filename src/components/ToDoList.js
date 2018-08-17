import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions';
import _ from 'lodash';
import ToDoListItem from './ToDoListItem';
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
        const { addFormValue } = this.state;
        const { addToDo } = this.props;
        event.preventDefault();
        addToDo({ title: addFormValue });
        this.setState({ addFormValue: "" });
    };

    renderAddForm = () => {
        const { addFormVisible, addFormValue } = this.state;
        if (addFormVisible) {
            return (
                <div>
                    <form onSubmit={this.handleFormSubmit}>
                        <div>
                            <input
                                value={addFormValue}
                                onChange={this.handleInputChange}
                                id="toDoNext"
                                type="text"
                            />
                            <p>When finished press enter to add it to ToDo List</p>
                        </div>
                    </form>
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
                     {addFormVisible ? (
                         <b>Close</b>
                     ) : (
                         <b>Add</b>
                     )}
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