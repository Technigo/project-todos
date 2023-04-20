import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    font-size: 56px;
    border: solid green 3px;
    border-radius: 25px 5px 25px 5px;
    -webkit-border-radius: 25px 5px 25px 5px;
    -moz-border-radius: 25px 5px 25px 5px;
`;

export const Header = () => {
  return <StyledHeader>To Do - App</StyledHeader>
}