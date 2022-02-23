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
`;

const Header =()=>{
    return(
        <HeaderWrapper>
            Your To-dos
            <ListSummary/>
        </HeaderWrapper>
    );
};
export default Header;