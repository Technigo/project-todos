import React from 'react';
import styled from 'styled-components';
import Weather from './Weather';

const Footer = () => {
  return (
    <FooterStyling>
      <div>
        <p>Mia Dahlgren</p>
        <p>View it on <a href="https://github.com/miadahlgren/project-todos">GitHub</a></p>
      </div>
      <Weather />
    </FooterStyling>)
}

export default Footer;

const FooterStyling = styled.div`
position: absolute;
top: 1100px; 
height: 20vh;
width: 100%;
font-size: 48px;
color: white;
display: flex;
justify-content: center;
align-items: center;
background-color: transparent;


p{
  font-size: 20px;
  margin-right: 2vw;
  color: white; 
  text-align: center;
  margin-top: 2px;
}

a{
  text-decoration: none;
  color: grey;
}

`

