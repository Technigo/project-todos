import styled from 'styled-components';

export const Button = styled.button`
  padding: 12px;
  margin: 6px;
  background: ${(props) => props.background || 'pink'};
  font-size: 20px;
  border: none;
  border-radius: 6px;
  width: ${(props) => props.width};
  &:hover {
    background: black;
    color: white;
  }
`;
