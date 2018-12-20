import { createMuiTheme } from '@material-ui/core/styles';
import '../../App.css'

const palette = {
  primary: { main: '#30a2d6' },
  secondary: { main: '#ffcc80' },
};

const themeName = 'Jelly Bean Tia Maria Spiny Mouse';

export default createMuiTheme({ palette, themeName });