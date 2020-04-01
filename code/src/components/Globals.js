import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'


// CSS variables for Styled components.
const theme = {
  breakpoints: {
    small: 360,
    medium: 576,
    large: 768,
    xlarge: 1024,
    xxlarge: 1200,
    xxxlarge: 1320
  },
  colors: {
    black: '#222',
    white: '#fff',
    blackOpaque: 'rgba(0,0,0,0.75)',
    boxshadow: 'rgba(0,0,0,0.1)',
    orange: 'orangered',
    background: '#EFFBFB'
  } 
}

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.background};
  }
`;
  
const Globals = ({ children }) => (
  <ThemeProvider theme={theme}>
  <GlobalStyle />
    <>
      {children}
    </>
  </ThemeProvider>
)

export default Globals
