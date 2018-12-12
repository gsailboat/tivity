import { createMuiTheme } from '@material-ui/core/styles';
import '../../App.css'

const font = "'Pacifico', cursive";

const palette = {
  primary: { main: '#30a2d6' },
  secondary: { main: '#cc5311' }
};

const title = {
  fontFamily: font
}
const themeName = 'Jelly Bean Tia Maria Spiny Mouse';

export default createMuiTheme({ palette, themeName, title });