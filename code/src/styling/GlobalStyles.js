import styled from 'styled-components'

// Todo - categories
export const Container = styled.section`
  width: 100vw; 
  display: flex; 
  justify-content: center;
  align-items: center; 
  flex-direction: column;
`;

export const Header = styled.h1`
  font-size: 16px; 
  text-transform: uppercase;
  color: #793dfc;
`;

// Background
export const Background= styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  opacity: 0.8;
`;
