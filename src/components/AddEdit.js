import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { changeToDo } from '../actions';
import { addToDo } from '../actions';
import { connect } from 'react-redux';

class AddEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: true,
            change: ""
        }
    }

    handleInputChange = event => {
        this.setState({
            change: event.target.value
        })
    }

    handleSubmit = (changeToDoId) => {
        const { changeToDo } = this.props;
        changeToDo(changeToDoId, {title: this.state.change});
        this.setState({
            open: false,
            change: ""
        })
    }

    handleAdd = event => {
        const { addToDo } = this.props;
        event.preventDefault();
        addToDo({ title: this.state.change })
        this.setState({
            open: false,
            change: ""
        })
    }

    handleCancel = () => {
        this.setState({
            open: false,
            change: ""
        })
    }

    submitOption = () => {
        if (this.props.todo !== undefined) {
            return (
                <Button color="primary" onClick={() => {this.handleSubmit(this.props.todoId)}}>
                    Submit
                </Button>
            );
        }
        else
            return (
                <Button color="primary" onClick={this.handleAdd}>
                    Add Todo
                </Button>
            )
    }

    render() {
        var name = this.props.todo === undefined ? "" : this.props.todo.title;
        console.log("addedit " + this.state.open)
        return (
            <div>
                <Modal
                    open={this.state.open}
                >
                    <div>
                        <Typography variant="title" id="modal-title">
                            { name ? "Edit Todo" : "Add Todo" }
                        </Typography>
                        <Input
                            onChange={this.handleInputChange}
                            defaultValue={name}
                        />
                        <Button color="secondary" onClick={this.handleCancel}>
                            Cancel
                        </Button>
                        {this.submitOption()}
                    </div>
                </Modal>
            </div>
        );
    }
}

export default connect(null, { changeToDo, addToDo })(AddEdit);