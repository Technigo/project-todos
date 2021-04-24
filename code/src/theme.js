import { createMuiTheme }  from '@material-ui/core/styles'

const theme = createMuiTheme ({
  // overrides: {
  //   MuiCheckbox: {
  //     colorPrimary: {
  //       '&$checked': {
  //         color: "#00a19e",
  //       }
  //     },
  //     colorSecondary: {
  //       '&$checked': {
  //         color: "#00a19e",
  //       }
  //     }
  //   }
  // },
  palette: {
    type: "light",
    common: { 
      black: "#000",
      white: "#fff",
    },
    primary: { 
      light: "#fff",
      main: "#F7F7F7",
      dark: "#D9D9D9",
      contrastText: "#000"
    },
    secondary: { 
      light: "#616161",
      main: "#333333",
      dark: "#0F0F0F",
      contrastText: "#fff"
    },
    action: {
      hoverOpacity: 0.10,

    }
  },
})

export default theme