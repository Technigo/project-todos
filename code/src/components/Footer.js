import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
  return (
    <FooterDiv>
    <div>
      <p>This project is made by Gabriella Bolin @Technigo Bootcamp 2020</p>
    </div>
    <div>Icons made by  
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik"> Freepik </a> 
      from 
      <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com </a>
      <a href='https://www.freepik.com/vectors/banner'>Banner vector created by freepik - www.freepik.com</a>
    </div>
    </FooterDiv>
  );
};

const FooterDiv = styled.div`
  text-align: center;
  position: absolute;
  bottom: 0;
  padding-bottom: 15px;
  font-size: 10px;
  width: 260px;
`
