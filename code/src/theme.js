import { Typography } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        // background: {
        //   default: '#303030',
        //   paper: '#424242'
        // },
        primary: {
           main: '#000',
        //   dark: '#303f9f',
        //   contrastText: '#fff'
        },
        type: 'dark',
      },
      typography: {
        fontFamily: 'Comic Sans MS'
      },
      shape: {
        borderRadius: 5
      }
});

export default theme;