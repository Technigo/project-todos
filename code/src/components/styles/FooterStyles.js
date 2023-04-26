import styled from 'styled-components';

export const FooterText = styled.footer`
  position: fixed;
  align-self: center;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2px;
  margin-bottom: 1.5rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  text-align: center;
  color: white;
  font-family: 'League Spartan', sans-serif;
  color: #e6dbbc;
  font-size: 1.2rem;
  height: 20px;
  min-width: 315px;
  background-color: #0f333a;
  z-index: 4;

  @media (max-width: 667px) {
    font-size: 0.9rem;
  }
`;
