import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    `

const HeaderTitle = styled.h1`
    font-size: 3rem;
    text-align: center;
    `

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>Todo</HeaderTitle>
    </HeaderWrapper>
  )
}