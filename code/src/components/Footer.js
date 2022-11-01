import React from 'react';
import styled from 'styled-components/macro';

const Footer = () => {
  return (
    <FooterStyle className="footer">
      <a href="https://github.com/joeohm" target="_blank" rel="noreferrer">
        by Joel Öhman
      </a>
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.footer`
  position: absolute;
  text-shadow: 0px 0px 5px rgb(177 175 175 / 75%);
  bottom: 1%;
  right: 1%;
  z-index: 2;
  font-family: 'Sarina';
  transition: all 0.3s ease-in-out;
  a {
    text-decoration: none;
    color: black;
  }

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 1024px) {
    text-shadow: 0px 0px 5px rgb(88 88 88 / 30%);
  }
`;
