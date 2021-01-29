import styled from 'styled-components';

export const Button = styled.button`
  background: none;
  border: 1px solid #869D7A;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'PT Sans', sans-serif;
  font-size: 14px;
  width: 48%;
  height: 50px;
  padding: 3px;

  &:hover {
    border: 1px solid #000;
  }

  @media (max-width: 325px) {
    height: 60px;
  }
`;

