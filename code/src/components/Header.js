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
    width: 80%;
    background-color: #303030;
    color: #ffbe91;
    border: 2px solid #ffbe91;
    border-radius: 40px;
    box-shadow: 5px 5px 20px #ffbe91, -5px -5px 20px #ffbe91;
    justify-content: center;
    margin: 10px;
`
