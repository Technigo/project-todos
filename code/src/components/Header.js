import React from 'react';
import styled from 'styled-components/macro'; 
import ListSummary from './ListSummary';
//styling 
const HeaderWrapper = styled.header`
height: 50px;
padding: 10px;
display:flex;
flex-direction: column; 
justify-content: space-between; 
margin-bottom:10px auto;


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
font-size: 40px;
text-align: center;
@media (min-width: 768px) {
    flex-direction: row;
    text-align: center;
  }
@media (min-width: 768px) {
    font-size: 68px;
    margin-left: 50px;
    margin-bottom: 0;
  }
  @media (min-width: 1366px) {
    margin-left: 95px;
  }
`
const Header =()=>{
    return(
        <HeaderWrapper>
            <Title>Your To-dos</Title>
            <ListSummary/>
        </HeaderWrapper>
    );
};
export default Header;