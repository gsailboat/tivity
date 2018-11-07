import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as actions from './../actions';
// import _ from 'lodash';
import { Typography } from '@material-ui/core';
// import { AppBar } from '@material-ui/core';
import { Tabs, Tab, Paper } from '@material-ui/core';
//import { timingSafeEqual } from 'crypto';
// import { __generator } from '../../node_modules/tslib';

class DailyPoints extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 0
        }
    }

    renderPoints() {
        if(this.state.current) {
            return <h3>{this.props.tday}</h3>
        }
        return <h3>{this.props.tweek}</h3>
    }

    // componentWillMount() {
    //     this.props.fetchPoints()
    // }

    handleChange = (event, value) => {
        this.setState({
            current: value
        })
    };

    render() {
        //const { classes }= 
        console.log(this.state.current);
        return(
            <div>
                <div>
                    <Typography align='center' variant='title'>
                        Tivity
                    </Typography>
                </div>
                <div>
                    <Paper>
                        <Tabs
                            value={this.state.current}
                            onChange={this.handleChange}
                            centered
                        >
                            <Tab label="Current"/>
                            <Tab label="History"/>
                        </Tabs>
                        {this.state.current === 0 && <h1>HI</h1>}
                        {this.state.current === 1 && <h1>BYE</h1>}
                    </Paper>
                </div>
            </div>
        );
    }
}

export default DailyPoints;