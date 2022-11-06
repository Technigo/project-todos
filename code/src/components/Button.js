import React from 'react';
import styled from 'styled-components/macro';

const Button = ({ src, alt }) => {
  return (
    <StyledButton>
      <img src={src} alt={alt} />
    </StyledButton>
  )
}

export default Button;

export const StyledButton = styled.button`
    border: none;
    background-color: var(--color-gray);
    width: 1.30rem;
    height: 1.30rem;
    border-radius: 50%;
`;