import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0 auto;
  }
  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    max-width: 1024px;
    height: 100%;
    font-family: 'Cormorant Garamond', serif;
    background-color: #525252;

    @media (min-width: 1024px){
      border: 3px solid rgb(0, 51, 51, 0.1);
    }
  }
`

export const OuterWrapper = styled.div`
background-color: #525252;
/* min-height: 100vh;
display: flex;
flex-direction: column; */
`

export const Wrapper = styled.div`
/* background-color:#ffadad; */
`

export const ContentWrapper = styled.div`
background-color: #f6ede8;
margin-top: 30px;
padding: 100px;
/* top-left top-right bottom-right bottom-left */
border-radius: 350px 350px 0 0;
min-height: 100vh;
`