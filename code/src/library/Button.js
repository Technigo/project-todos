import styled from 'styled-components'

export const Button = styled.button`
  padding: 12px;
  margin: 6px;
  background: ${(props) => props.background || 'lightgrey'};
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer; 

  &:hover {
    background: black;
    color: white;
    `