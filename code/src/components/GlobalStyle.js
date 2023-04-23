import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    
}
body {
  background: var(--white);
  border: 3px solid var(--dark-blue);
  border-radius: 15px;
  animation-name: slide-in-top;
  animation-duration: 1s;

  @keyframes slide-in-top {
    from{
        transform: translate3d(0, -100%, 0);
        visibility: visible;
    }
    to{
        transform: translate3d(0, 0, 0);
    }
}

  @media (min-width: 768px) {
     margin:2vh 20%;
  }
   @media (min-width: 1024px) {
     margin: 1vh 20%;
  }
  @media (min-width: 1200px) {
     margin: 4vh 20%;
  }
}
`
