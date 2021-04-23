import React from "react"
import styled from 'styled-components'

const HeaderWrapper = styled.header`
display: flex;
background-color: #6C4123;
color: #ece4b7;
height: 60px;
border-radius: 10px;
padding:10px;
align-items: center;
margin:
` 


const Header = () => {
 
  return (
    <HeaderWrapper>
      <h1>My to-do list</h1>
    </HeaderWrapper>
  );
};

export default Header;