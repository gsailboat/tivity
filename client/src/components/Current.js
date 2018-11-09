import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';
import { Card, CardHeader, IconButton } from '@material-ui/core';
//import { relativeTimeThreshold } from '../../node_modules/moment';

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
            this.setState(prevState => ({
                time: "This Week's Points",
                icon: "calendar_today"
            }))
        }
        else if (this.state.time === "This Week's Points") {
            this.setState(prevState => ({
                time: "This Month's Points",
                icon: "today"
            }))
        }
        else {
            this.setState(prevState => ({
                time: "Today's Points",
                icon: "date_range"
            }))
        }
    }

    render() {
        return(
            <Card>
                <CardHeader
                    title={this.state.time}
                    action={
                        <IconButton
                            onClick={this.handleCalendar}
                        >
                            <MaterialIcon icon={this.state.icon} />
                            {/* <MaterialIcon icon="date_range" />
                            <MaterialIcon icon="calendar_today" /> */}
                        </IconButton>
                    }
                >
                </CardHeader>
            </Card>
        )
    }

}

export default Current;