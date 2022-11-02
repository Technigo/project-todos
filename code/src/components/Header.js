import React from 'react'
import styled from 'styled-components/macro'

import DONE from 'assets/donewhite.png'

export const Header = () => {
  return (
    <HeaderOuterWrapper>
      <HeaderInnerWrapper>
        <img className="done" src={DONE} alt="img-done" height="100px" />
        <h1>TO DO</h1>
      </HeaderInnerWrapper>
    </HeaderOuterWrapper>
  )
};

export const HeaderOuterWrapper = styled.div`
width: 100%;
background-color: #F69101;
color: white;
margin:0;
padding:0;
display:flex;
justify-content: center;
`;

export const HeaderInnerWrapper = styled.div`
padding-top: 30px;
margin: 0;

h1 {
  margin: -15px 0 40px 0;
  font-size: 20px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
}
`;

