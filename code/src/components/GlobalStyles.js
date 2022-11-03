import { createGlobalStyle, keyframes } from 'styled-components/macro';

// Project text colors
export const textColor = '#7a7a7a';

// Project fonts
export const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'Sarina';
  src: url('/Fonts/sarina/Sarina-Regular.ttf');
}
`;

export const contentAppear = keyframes`
0% {
  opacity: 0;
}
  60% {
    opacity: 0;
    transform: scale(0.9);
  }
  75% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
  `;
