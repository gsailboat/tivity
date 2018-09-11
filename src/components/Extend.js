import React, { Component } from 'react';
import Collapse from '@material-ui/core/Collapse';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MaterialIcon from 'material-icons-react';
import ToDoList from './ToDoList';

class Extend extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: false,
            more: "expand_more"
        }
    }

    handleExpand = () => {
        this.setState(prevState => ({
            expanded: !prevState.expanded,
            more: prevState.more === "expand_more" ? "expand_less" : "expand_more"
        }));
    }

    render() {
        return(
            <div>
                <Card>
                    <CardHeader
                        action={
                            <IconButton onClick={this.handleExpand}>
                                <MaterialIcon icon={this.state.more}/>
                            </IconButton>
                        }
                        title="Today's Todos"
                    />
                    <Collapse in={this.state.expanded}>
                        <CardContent>
                            <ToDoList />
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
        )
    }
}

export default Extend;