import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------

export const Footer = () => {
  // Sneaky hidden function to clear local storage
  const handleReload = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <FooterWrapper>
      <p>A web app made by Karin Nordkvist @ Technigo - 14/24</p>
      <p>Copyright 2020 - Logo/icon from Noun Project</p>
      <span onClick={handleReload}>▴</span>
    </FooterWrapper>
  );
};

// Footer -------------------------------
const FooterWrapper = styled.footer`
  text-align: center;
  margin: 50px 0 30px 0;

  & p {
    font-size: 10px;
    margin: 5px;
  }
`;
