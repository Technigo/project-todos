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

  @media (min-width: 0px) and (max-width: 991px) {
    margin-top: auto;
  }
  @media (min-width: 992px) {
    padding: 30px;
    margin-top: 50px;
  }
`;
