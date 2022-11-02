import React from 'react';
import styled from 'styled-components';

export const Header = () => {
  return (
    <HeaderContainer>
      <h1>Linnéas To Do App</h1>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
    display: flex;
    background-color: cyan;
    border: 2px solid darkblue;
    justify-content: center;
`
