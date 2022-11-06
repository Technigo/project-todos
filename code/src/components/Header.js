import React from 'react';
import styled from 'styled-components';

export const Header = () => {
  return (
    <HeaderContainer>
      <h1>To Do App</h1>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
    display: flex;
    width: 100vw;
    background-color: #303030;
    color: #ffbe91;
    box-shadow: 0px 15px 20px -15px #ffbe91;
    justify-content: center;
`
