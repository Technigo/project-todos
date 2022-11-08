/* eslint-disable linebreak-style */
import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
   
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Source Sans Pro', sans-serif;
   }

   body {
      background: #7D6E83;
      animation-name: slide-in-left;
      animation-duration: 1s;

      @keyframes slide-in-left{
    from{
        transform: translate3d(-100%, 0, 0);
        visibility: visible;
    }
    to{
        transform: translate3d(0, 0, 0);
    }
}
    
   
      @media (min-width: 768px) and (max-width: 1023px) {
         margin: 10vh 20%;
      }

      @media (min-width: 1024px) {
         margin: 10vh 30%;
      }


   }

`

