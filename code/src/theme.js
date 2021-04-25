import { createMuiTheme }  from "@material-ui/core/styles"

const theme = createMuiTheme ({
  palette: {
    type: "light",
    common: { 
      black: "#000",
      white: "#fff",
    },
    primary: { 
      light: "#fff",
      main: "#f7f7f7",
      dark: "#d9d9d9",
      contrastText: "#000"
    },
    secondary: { 
      light: "#616161",
      main: "#333333",
      dark: "#0f0f0f",
      contrastText: "#fff"
    },
    action: {
      hoverOpacity: 0.10,
    }
  },
})

export default theme