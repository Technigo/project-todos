import { createGlobalStyle } from "styled-components";

export const devices = {
    mobile: "(min-width: 375px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1025px)",
}

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
  font-family:'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url(../images/background.jpg);
  object-fit: cover;
  background-position: 100% 44%;

  @media ${devices.tablet}{
    background-position: 100% 40%;
  }
}
`;
