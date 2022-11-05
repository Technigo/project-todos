// main color, details #79b6c1
// secondary colour background #e4f0f2
// to do section #ffff

import styled, { createGlobalStyle, css } from 'styled-components/macro';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #e4f0f2;
  }
 
`;

// Main styling for the outer wrapper
export const OuterWrapper = styled.div`
width: 100vw;

// Specific styling for OuterWrappers in header component
${(props) => props.header1 && css`
width: 100vw;
    background-color: #ffff;
    border-radius: 0px 0px 30px 30px;
    z-index: 2;
    position: absolute;

  `}

  ${(props) => props.header2 && css`
  width: 100vw;
    background-color: #79b6c1;
    margin-top: 15%;
    border-radius: 0px 0px 30px 30px;
    z-index: 1;
    position: absolute;

  `}

  ${(props) => props.taskOuter && css`
  margin: 50% auto;

  `}
  
`;

export const InnerWrapper = styled.div`
width: 90%;
margin: 2% auto;

${(props) => props.taskInner && css`
 background-color: #ffff;
 border-radius: 15px;
  `}
`;