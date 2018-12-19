import React, { Component } from 'react';
import { Tabs, Tab, Paper, Typography } from '@material-ui/core';
import { MuiThemeProvider, withStyles } from'@material-ui/core/styles';
import PropTypes from 'prop-types';
import Theme from './colors';
import Current from "./Current";
import '../App.css'

const styles = theme => ({
    point: {
        width: "85vw",
        margin: 'auto' 
    },
    tab: {
        backgroundColor: Theme.palette.primary.main,
        color: Theme.palette.primary.contrastText
    },
    head: {
        margin: 'auto',
        padding: '10vh'
    },
    title: {
        fontFamily: "'Pacifico', cursive",
        fontWeight: "normal",
        src: "url('https://fonts.googleapis.com/css?family=Pacifico')",
        color: Theme.palette.primary.main
    }
})

class DailyPoints extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 0
        }
    }

    renderPoints() {
        if(this.state.current) {
            return <Typography variant='h2' component='h4'>{this.props.tday}</Typography>
        }
        return <Typography variant='h2' component='h4'>{this.props.tweek}</Typography>
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
        const { classes }= this.props;
        console.log(this.state.current);
        return(            
            <MuiThemeProvider theme={Theme}>
                <div className={classes.head}>
                <Typography align='center' variant='display4' component='h2' className={classes.title}>
                    Tivity
                </Typography>
                </div>
                <Paper className={classes.point}>
                    <Tabs
                        value={this.state.current}
                        onChange={this.handleChange}
                        centered
                    >
                        <Tab label="Current" className={classes.tab}/>
                        <Tab label="History" className={classes.tab}/>
                    </Tabs>
                    {this.state.current === 0 && <Current />}
                    {this.state.current === 1 && <Typography variant='h2' component='head'>BYE</Typography>}
                </Paper>
            </MuiThemeProvider>
        );
    }
}

DailyPoints.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DailyPoints);