/* eslint-disable linebreak-style */
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #9AA3B8;
    --secondary: #497d59;
    --tertiary: #264e49;
    --quaternary: #D9E2F7;
    --quinary: #FBFAEF;
  }
  * {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0;
  }
  html{
    height: 100%;
  }
  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* font-family: 'Cormorant Garamond', serif; */
    background-color: var(--secondary);
    position: relative;
    @media (min-width: 668px) and (max-width: 1023px){
    }
    @media (min-width: 1024px){
    }
  }
`

export const OuterWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 97%;
  max-height: 100vh;

  @media (min-width: 600px) and (max-width: 900px){
    max-width: 85%;
}
  @media (min-width: 901px){
  max-width: 36%;
  }
`

export const ContentWrapper = styled.div`
  background-color: var(--tertiary);
  margin: 35px 25px 0;
  border-radius: 4px 4px 4px 4px;
  /* min-height: 100vh; */
p{
  word-wrap: break-word;
}
@media (min-width: 600px) and (max-width: 900px){
  margin: 80px 30px 0;
}
@media (min-width: 901px){
  margin: 30px 40px 0;
  border-radius: 4px 4px 4px 4px;
  }
`

export const BottomLine = styled.div`
  background-color: var(--quaternary);
  width: 100%;
  height: 40px;  
  position: absolute;
  bottom: 0;
  align-self: flex-end;
  z-index: -1;
`

export const Button = styled.button`
  margin: 0;
  border: none;
  background-color: transparent;
  transition: transform 0.5s ease 0s;
  &:hover{
    transform: scale(1.2);}
    img{
      width: 50px;
      height: 50px;
      filter: invert(100%);
      margin: 8px 5px;
    }
@media (min-width: 600px) and (max-width: 900px){
  img{
    width: 35px;
    height: 35px;
  }
}
@media (min-width: 901px){
  img{
    width: 70px;
    height: 70px;
  }
}
`