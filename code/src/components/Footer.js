import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
  return (
    <FooterWrapper>
      <div className="logoName">
        <h1>Tada <sup>&copy;</sup> 2023 - Made by Joanna Philips</h1>
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
    padding: 10px;
    margin-top: 1.5rem;
    background-color:var(--dark-blue);

    .logoName {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h1 {
        color: var(--white);
        font-size: 0.8rem;
        font-weight: 400;
    }
    sup {
      font-size: 0.7rem;
      font-weight: lighter;
    }
    
`