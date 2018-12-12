import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';
import { Card, CardHeader, IconButton, CardContent } from '@material-ui/core';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Theme from './colors'
//import { relativeTimeThreshold } from '../../node_modules/moment';

const styles = theme => ({
    header: {
        backgroundColor: Theme.palette.secondary.main,
        color: Theme.palette.secondary.contrastText
    },
    icon: {
        backgroundColor: Theme.palette.primary.main,
    },
    ibutton: {
        color: Theme.palette.secondary.light
    }
})

class Current extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: "Today's Points",
            icon: "date_range"
        }
    }

    handleCalendar = () => {
        if (this.state.time === "Today's Points") {
            this.setState({
                time: "This Week's Points",
                icon: "calendar_today"
            })
        }
        else if (this.state.time === "This Week's Points") {
            this.setState({
                time: "This Month's Points",
                icon: "today"
            })
        }
        else {
            this.setState({
                time: "Today's Points",
                icon: "date_range"
            })
        }
    }

    renderCurrent() {
        if (this.state.time === "Today's Points") {
            return (
                "Wonderful in the neighborhood"
            )
        }
        else if (this.state.time === "This Week's Points") {
            return (
                "Swell"
            )
        }
        else {
            return (
                "Yep"
            )
        }
    }

    render() {
        const { classes } = this.props;

        return(
            <MuiThemeProvider theme={Theme}>
                <Card>
                    <CardHeader
                        className={classes.header}
                        title={this.state.time}
                        action={
                            <IconButton
                                onClick={this.handleCalendar}
                                className={classes.icon}
                            >
                                <MaterialIcon
                                    icon={this.state.icon}
                                    className={classes.ibutton}
                                />
                            </IconButton>
                        }
                    >
                    </CardHeader>
                    <CardContent>
                        <h1>Hello</h1>
                        {this.renderCurrent()}
                    </CardContent>
                </Card>
            </MuiThemeProvider>
        )
    }

}

Current.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Current);