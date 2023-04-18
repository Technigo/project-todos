import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: #DA58C2;
  font-size: 16px;
  margin: 0 0 2px 5px;
`;

const Footer = () => {
  return (
    <div className="Footer">
      <StyledFooter>Created by Matilda Frid 🐢</StyledFooter>
    </div>
  );
}

export default Footer;