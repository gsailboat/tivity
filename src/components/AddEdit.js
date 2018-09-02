import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { changeToDo } from '../actions';
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

    handleCancel = () => {
        this.setState({
            open: false,
            change: ""
        })
    }

    render() {
        console.log(this.props.todo.title)
        return (
            <div>
                <Modal
                    open={this.state.open}
                >
                    <div>
                            <Typography variant="title" id="modal-title">
                                {this.props.todo.title ? "Edit Todo" : "Add Todo" }
                            </Typography>
                        <Input
                            onChange={this.handleInputChange}
                            defaultValue={this.props.todo.title}
                        />
                        <Button color="secondary" onClick={this.handleCancel}>
                            Cancel
                        </Button>
                        <Button color="primary" onClick={() => {this.handleSubmit(this.props.todoId)}}>
                            Submit
                        </Button>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default connect(null, { changeToDo })(AddEdit);