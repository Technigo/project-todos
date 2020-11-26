import { createMuiTheme } from '@material-ui/core/styles';

//This file is for overriding the default theme of material UI 

const theme = createMuiTheme({
    palette: {
        primary: {
           main: '#000',
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