// globalStyles.js
import { createGlobalStyle } from 'styled-components'
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    padding: 0;
    background: rgba(25, 118, 210, 0.5);
  }
  h1 {
    font-size: 24px;
  }
  p {
    margin-block-start: 2px;
    margin-block-end: 2px;
  }
`
 
export default GlobalStyle