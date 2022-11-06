// main color, details #79b6c1
// secondary colour background #e4f0f2
// to do section #ffff

// Styled Mobile first

import styled, { createGlobalStyle, css } from 'styled-components/macro';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #e4f0f2;
    font-family: 'Quicksand', sans-serif;
  }
 
`;

// Main styling for the OuterWrapper
export const OuterWrapper = styled.div`
width: 100vw;

// Main styling OuterWrapper for bigger devices
@media (min-width: 600px) {
  width: 400px;
}

// Header1 wrapper and media query
${(props) => props.header1 && css`
width: 100vw;
    background-color: #ffff;
    border-radius: 0px 0px 30px 30px;
    z-index: 2;
    position: absolute;

    @media (min-width: 600px) {
      border-radius: 30px 30px 30px 30px;
}
  `}

// Header2 wrapper and media query
  ${(props) => props.header2 && css`
  width: 100vw;
    background-color: #79b6c1;
    padding-top: 30%;
    padding-bottom: 10px;
    border-radius: 0px 0px 30px 30px;
    z-index: 1;
    position: absolute;

    @media (max-width: 250px) {
      padding-top: 27%;
}

    @media (min-width: 600px) {
      border-radius: 30px 30px 30px 30px;
      padding-top: 110px;
    padding-bottom: 10px;
}
  `}

  // OuterWrapper in TaskList.js (2nd return) and media query
  ${(props) => props.taskOuter && css`
  margin: 65% auto 15% auto;

  @media (max-width: 350px) {
    margin: 70% auto 15% auto;
}

@media (max-width: 250px) {
    margin: 80% auto 15% auto;
}

@media (min-width: 600px) {
    margin: 55% auto 15% auto;
}
  `}
`;

// Main InnerWrapper style
export const InnerWrapper = styled.div`
width: 90%;
margin: 2% auto;

// Inner wrappers for Header.js
${(props) => props.headerInner2 && css`
 text-align: center;
  `}

  // InnerWrapper for TaskList.js
${(props) => props.taskInner && css`
 background-color: #ffff;
 border-radius: 15px;
  `}

  //InnerWrapper for AddTask.js and media query
  ${(props) => props.addNewInner && css`
 width: 70%;
 margin: 0 auto 10% auto;

 @media (max-width: 350px) {
  width: 80%;
}
  `}
`;

// Buttons, Add new task btn and remove all btn styling
export const Btn = styled.button`
    background-color:  #79b6c1;
    border-radius: 15px;
    border: 4px solid #79b6c1;
    cursor: pointer;
`;