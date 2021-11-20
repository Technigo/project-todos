import React from 'react';
import styled from 'styled-components'; 
import ListSummary from './ListSummary';

const HeaderWrapper = styled.header`
height: 50px;
padding: 10px;
display:flex;
flex-direction: column; 
justify-content: space-between; 
margin-bottom:20px;

@media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
@media (min-width: 768px) {
    font-size: 38px;
    margin-left: 50px;
    margin-bottom: 0;
  }
  @media (min-width: 1366px) {
    margin-left: 95px;
  }
`
const Title = styled.text`
font-size: 30px;
text-align: center;
`
const Header =()=>{
    return(
        <HeaderWrapper>
            <Title>To do app</Title>
            <ListSummary/>
        </HeaderWrapper>
    );
};
export default Header;