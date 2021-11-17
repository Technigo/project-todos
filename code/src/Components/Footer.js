import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
  return (
    <StyledFooter>
      <h1>
        Hedvig Mejstedt{' '}
        <span aria-label="lion" role="img">
          🦁
        </span>
      </h1>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  border: 5px dotted black;
  background-color: var(--main-color);
  text-align: center;
  margin-top: auto;
`;
