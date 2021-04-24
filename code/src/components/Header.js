import React from "react"
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  height: 60px;
  border-radius: 10px;
  padding:10px;
  margin-bottom:20px;
 ` 

const Title = styled.text`
  font-size: 35px;
  padding-top: 24px;
  letter-spacing: 0.5px; 
` 

const Header = () => {
 
  return (
    <HeaderWrapper>
      <Title>Daniela's tasks</Title>
    </HeaderWrapper>
  );
};

export default Header;