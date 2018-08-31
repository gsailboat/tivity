import React, { Component } from "react";
import MaterialIcon from 'material-icons-react';
import IconButton from '@material-ui/core/IconButton'

class Buttons extends Component {
render() {
    return (
        <div style={{display: "inline-block"}}>
            <IconButton>
                <MaterialIcon icon="delete"/>
            </IconButton>
            <IconButton>
                <MaterialIcon icon="done"/>
            </IconButton>
            <IconButton>
                <MaterialIcon icon="edit"/>
            </IconButton>
        </div>
    );
}
}
export default Buttons;