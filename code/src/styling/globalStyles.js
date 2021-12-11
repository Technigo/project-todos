// globalStyles.js
import { createGlobalStyle } from 'styled-components'
 
const GlobalStyle = createGlobalStyle`
  .flex-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .grid-item {
    display: grid;
    width: 90%;
    grid-template-columns: 1fr;
`
 
export default GlobalStyle