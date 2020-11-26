import styled from 'styled-components'

export const Button = styled.button`
  margin: 6px;
  padding: 12px;
  background: ${(props) => props.background || 'salmon'};
  font-size: 15px;
  border: none;
  border-radius: 6px;
  
  &:hover {
    background: #green;
    color: #fff;
  } 
`

export const RemoveButton = styled.button`
  margin: 6px;
  padding: 12px;
  background: ${(props) => props.background || '#5692ff'};
  ${'' /* font-size: 15px; */}
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  align-self: flex-end;
  
  &:hover {
    background: #007fff;
    color: #fff;
  } 
`