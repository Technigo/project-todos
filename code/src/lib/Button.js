import styled from 'styled-components'

export const Button = styled.button`
  margin: 6px;
  padding: 8px;
  font-size: 12px;
  background: ${(props) => props.background || '#5692ff'};
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #007fff;
    color: #fff;
    cursor: pointer;
  } 
`