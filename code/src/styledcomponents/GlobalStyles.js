import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
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
    height: 100%;
    font-family: 'Cormorant Garamond', serif;
    background-color: #6E7582;

    @media (min-width: 668px) and (max-width: 1023px){
        overflow: hidden;
    }
    @media (min-width: 1024px){
      border: 3px solid rgb(0, 51, 51, 0.1);
      overflow: hidden;
    }
  }
`

export const OuterWrapper = styled.div`
position: relative;
display: flex;
flex-direction: column;
min-height: 100vh;
`

export const ContentWrapper = styled.div`
background-color: /* #F9E4D4 */ #F39189;
margin: 30px 20px 0 20px;
padding: 80px 40px;
/* top-left top-right bottom-right bottom-left */
border-radius: 350px 350px 0 0;
min-height: 100vh;
/* max-height: 100%; */

p{
    word-wrap: break-word;
}

@media (min-width: 668px) and (max-width: 1023px){
    margin: 30px 20px 0 20px;
padding: 80px;  
}

  @media (min-width: 1024px){
  }
`

export const BottomLine = styled.div`
background-color: #F0E3CA;
width: 100%;
height: 40px;  
position: absolute;
bottom: 0;
align-self: flex-end;
z-index: -1;
`

export const Button = styled.button`
  display: inline;
  width: 50px;
  height: 20px;
  /* margin: 5% 40px 5% 0; */
  margin: 0;
  border: none;
  background-color: #046582;
  color: #F9E4D4;
  font-family: 'Cormorant Garamond', serif;
  font-size: 13px;
  transition: transform 0.5s ease 0s;

  &:hover{
    transform: scale(1.2);

  @media (min-width: 668px) and (max-width: 1023px){
    padding: 10px;
    margin-top: 40px;
    font-size: 17px;

  button{
  padding: 5px 15px;
  margin: 30px 10px;
  }
}

  @media (min-width: 1024px){
  }
}

`