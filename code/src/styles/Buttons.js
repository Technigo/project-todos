import styled from 'styled-components'

export const DeleteButton = styled.button`
border: none;
background-color: transparent;
`

export const Icon = styled.img`
border: 2px solid green;
height:20px;
&:hover {
  transform: scale(1.2);
}
`

export const AddTaskButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 18px;
  color: #8fc9a3;
  height: 25px;
  width: 25px;
  &:hover {
  font-size: 24px;
  cursor: crosshair;
}
`