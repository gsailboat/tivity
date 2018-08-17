import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button'

class Journal extends Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                    <div>
                        <TextField
                            fullWidth
                            multiline
                            id="journal"
                            label="Daily Entry"
                            rows="2"
                            margin="none"
                        />
                        <Button color='primary'>
                            Post
                        </Button>
                    </div>
            </React.Fragment>
        );
    }
}

export default Journal;