import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <p>This project is made by Gabriella Bolin @Technigo Bootcamp 2020</p>
      </div>
      <div>Icons made by
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik"> Freepik </a>
      from
      <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com </a>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  text-align: center;
  position: relative;
  bottom: 0;
  margin: 50px 0 20px 0;
  font-size: 10px;
  width: 80%;
`;
