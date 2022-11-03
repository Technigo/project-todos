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
    background-color: rgb(0, 98, 98, 0.5);
    justify-content: center;
`
