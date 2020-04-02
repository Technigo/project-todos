import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

// CSS variables for Styled components.
const theme = {
  colors: {
    text: '#444',
    black: '#222',
    white: '#fff',
    boxshadow: 'rgba(0,0,0,0.1)',
    // background: '#dee4e9',
    background: '#d1def0',
    secondary: '#E3CD81FF'
  } 
}

const GlobalStyle = createGlobalStyle`

/* button styles and animation for global use */

label, button {
  appearance: none;
  position: relative;
  border: none;
  background-color: ${props => props.theme.colors.background};
  padding: 0;
  border: 3px solid transparent;
  box-shadow:
      3px 3px 6px 3px rgba(0, 0, 0, 0.1),
      -3px -3px 3px 3px rgba(247, 251, 255, 0.5),
      3px 3px 8px 2px rgba(0, 0, 0, 0) inset,
      -3px -3px 7px 2px rgba(247, 251, 255, 0) inset;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-stroke: 1px solid #7989A4;
  transition: border 0.1s ease, box-shadow 0.1s ease, color 0.1s ease, text-stroke 0.1s ease;
  outline: none;

  span {
      position: absolute;
      top: 40%;
      left: 46%;
      transform: translate(-50%,-50%);
    }

  &:active {
    box-shadow:
      3px 3px 6px 3px rgba(0, 0, 0, 0),
      -3px -3px 3px 3px rgba(247, 251, 255, 0),
      3px 3px 8px 2px rgba(0, 0, 0, 0.1) inset,
      -3px -3px 7px 2px rgba(247, 251, 255, 0.7) inset;
    }
  }
}

  input[type="radio"]:checked + label {
      border: 6px solid transparent;
      box-shadow:
          3px 3px 6px 3px rgba(0, 0, 0, 0),
          -3px -3px 3px 3px rgba(247, 251, 255, 0),
          3px 3px 8px 2px rgba(0, 0, 0, 0.1) inset,
          -3px -3px 7px 2px rgba(247, 251, 255, 0.7) inset;
    }

    

  body {
    color: ${props => props.theme.colors.text};
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
