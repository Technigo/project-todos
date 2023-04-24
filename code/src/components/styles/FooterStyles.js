import styled from 'styled-components';
import trees from '../../images/trees.png';

export const FooterWrapper = styled.footer`
 background-image: url(${trees});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 90%; 
  margin: 0 auto;
  opacity: 0.4;
  z-index: 0; //this makes the footer go on top of
`
export const FooterText = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 10px;
  text-align: center;
  color: white;
  font-family: 'League Spartan', sans-serif;
  color: #E6DBBC;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  `;