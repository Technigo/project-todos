import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  border-radius: 45px;
  font-size: 1rem;
  letter-spacing: 2.5px;
  font-weight: 500;
  padding: 10px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  transition: all 0.3s ease 0s;
  cursor: pointer;

  :hover {
    transform: translateY(-3px);
  }
`;
