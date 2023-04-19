import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
}
body {
  background: aliceblue;
  animation-name: slide-in-top;
  animation-duration: 1s;

  /* @keyframes slide-in-top {
    from{
        transform: translate3d(0, -100%, 0);
        visibility: visible;
    }
    to{
        transform: translate3d(0, 0, 0);
    }
} */

  @media (min-width: 768px) {
     margin: 10vh 20%;
  }
  @media (min-width: 1024px) {
     margin: 5vh 30%;
  }
}
`
