import React, { Component } from 'react';
import Collapse from '@material-ui/core/Collapse';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MaterialIcon from 'material-icons-react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Theme from './colors';
import ToDoList from './ToDoList';
// import '../App.css';

const styles = theme => ({
    title: {
        backgroundColor: Theme.palette.secondary.main
    },
    card: {
        // width: '95vw',
        margin: 'auto',
        // marginTop:
        marginBottom: '20%'
    },
    icon: {
        backgroundColor: Theme.palette.primary.main,
    }
})

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
        const { classes } = this.props
        return(
            <MuiThemeProvider theme={Theme}>
                <Card
                    className={classes.card}
                >
                    <CardHeader
                        className={classes.title}
                        action={
                            <IconButton
                                onClick={this.handleExpand}
                                className={classes.icon}    
                            >
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
            </MuiThemeProvider>
        )
    }
}

Extend.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Extend);