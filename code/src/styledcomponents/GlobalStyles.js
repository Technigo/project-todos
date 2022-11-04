import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   :root {
    --primary: #BA2635;
    --secondary: #3F0D12;
    --tertiary: #DFCFA4;
    --quaternary: #8D775F;
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
    max-width: 1024px;
    font-family: 'Cormorant Garamond', serif;
    background-color: var(--secondary);

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
/* min-height: 100vh; */
`

export const ContentWrapper = styled.div`
background-color: var(--tertiary);
margin: 30px 20px 0;
border-radius: 350px 350px 0 0;
min-height: 100vh;

p{
    word-wrap: break-word;
}

@media (min-width: 600px) and (max-width: 900px){
  margin: 30px 30px 0;
}

  @media (min-width: 901px){
    margin: 90px 20px 0 20px;
    border-radius: 450px 450px 0 0;
  }
`

export const BottomLine = styled.div`
background-color: var(--quinary);
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
      width: 30px;
      height: 30px;
      filter: invert(26%) sepia(74%) saturate(1727%) hue-rotate(328deg) brightness(82%) contrast(104%);
    }

  @media (min-width: 600px) and (max-width: 900px){
    img{
      width: 35px;
      height: 35px;
    }
  }

  @media (min-width: 901px){
    img{
      width: 40px;
      height: 40px;
    }
  }

`