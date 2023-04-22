import styled from 'styled-components';
import trees from '../images/trees.png';

export const Footer = styled.footer`
 background-image: url(${trees});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 68%; /* or adjust to your desired height */
  margin: 0 auto;
  opacity: 0.4;
  z-index: 0;
`