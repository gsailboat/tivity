import React, { Component } from 'react';
import { changeToDo } from '../actions';
import { addToDo } from '../actions';
// import { addTime } from '../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import Theme from './colors';
import { Typography, Input, Button, Modal, CssBaseline, MuiThemeProvider } from '@material-ui/core'

    //  const styles = theme => ({
    //      modal: {
    //          backgroundColor: Theme.pallete.secondary.main
    //      }
    //  });

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
        changeToDo(changeToDoId, {title: this.state.change, time: moment().format() });
        this.props.reset();
        this.setState({
            open: false,
            change: ""
        })
    }

    handleAdd = event => {
        const { addToDo } = this.props;
        event.preventDefault();
        addToDo({ title: this.state.change, time: moment().format() });
        this.props.reset();
        this.setState({
            open: false,
            change: ""
        })
    }

    handleCancel = () => {
        this.props.reset();
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
        // const {classes} = this.props;
        return (
            <React.Fragment>
                <CssBaseline />
                    <MuiThemeProvider theme={Theme}>
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
                </MuiThemeProvider>
            </React.Fragment>
        );
    }
}

AddEdit.propTypes = {
    classes: PropTypes.object.isRequired
};

export default connect(null, { changeToDo, addToDo })(AddEdit);
// export default withStyles(styles)(AddEdit);