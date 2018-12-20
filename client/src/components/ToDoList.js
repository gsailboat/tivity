import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions';
import _ from 'lodash';
import ToDoListItem from './ToDoListItem';
import AddEdit from './AddEdit';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Theme from './colors'

const styles = theme => ({
    addb: {
        textAlign: 'center'
    }
});

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addFormVisible: false,
            expanded: false
        };
    };

    renderAddForm = () => {
        if (this.state.addFormVisible) {
            return (
                <div>
                    <AddEdit
                        todo={this.props.todo}
                        todoId={this.props.todoId}
                        reset={() => this.setState({addFormVisible: false})}
                    />
                </div>
            );
        }
    };

    renderToDos() {
        const { data } = this.props;
        // console.log("keys" + data.value);
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
        const count = this.props.data ? Object.keys(this.props.data).length : 0;
        const {classes} = this.props;
        return(
            <MuiThemeProvider theme={Theme}>
                <div>
                    <div>
                        {this.renderAddForm()}
                        {this.renderToDos()}
                    </div>
                    <div className={classes.addb}>
                        <Button
                            variant='contained'
                            color="primary"
                            onClick={() => this.setState({addFormVisible: true})}
                            disabled={count < 6 ? false : true}
                            // className={classes.addb}
                        >
                            <b>Add</b>
                        </Button>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

const mapStatetoProps = ({ data }) => {
    return {
        data
    };
};

ToDoList.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(connect(mapStatetoProps, actions)(ToDoList));