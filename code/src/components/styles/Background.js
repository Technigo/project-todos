import styled from 'styled-components';
import trees from '../../images/trees.png';

export const Background = styled.div`
  display: flex;
  background-image: url(${trees});
  background-size: cover;
  background-position: center bottom;
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  flex: 1;
  height: 100vh; 
  margin: 0 auto;
  opacity: 0.4;
  z-index: 1; 
`
