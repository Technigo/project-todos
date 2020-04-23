import styled from 'styled-components'

export const Button = styled.button`
  padding: 12px;
  margin-left: 16px;
  background: ${(props) => props.background || 'lightgrey'};
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer; 
  height: 38px;

  &:hover {
    background: black;
    color: white;
    `