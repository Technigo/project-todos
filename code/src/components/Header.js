import React from 'react';
import styled from 'styled-components'

const Header = () => {
  return (
    <Title>TASKS TO DO</Title>
    );
}

const Title = styled.h1`
  font-size: 35px;
  font-family: 'Crimson Text', serif;
  color: #ffb703;
  text-align: center;
`
export default Header;