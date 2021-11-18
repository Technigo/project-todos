import React from 'react';
import styled from 'styled-components'; 
import ListSummary from './ListSummary';

const HeaderWrapper = styled.header`
height: 50px;
padding: 10px;
display:flex;
flex-direction: row; 
`
const Title = styled.text`
font-size: 20px;
`
const Header =()=>{
    return(
        <HeaderWrapper>
            <Title>To do </Title>
            <ListSummary/>
        </HeaderWrapper>
    );
};
export default Header;