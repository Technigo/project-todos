import styled, { createGlobalStyle } from 'styled-components';
import Supermarket from 'Images/Supermarket.png'

const GlobalStyles = createGlobalStyle`
*, 
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`
export const Background = styled.div`
  display: flex;
  background-image: url(${Supermarket});
  background-size: cover;
  position: relative;
  width: 100vw;
  height: 100vh;
  `
export const Text = styled.h2`
  color: white;
`

export default GlobalStyles