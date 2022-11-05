import styled from 'styled-components';

export const NewTodoButton = styled.button`
  border-radius: 50%;
  height: 10vh;
  width: 10vh;
  background-color: #0925ff;
  color: white;
  border: white solid 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  &:hover {
    background-color: lightblue;
  }
  &.invisible {
    opacity: 0;
  }
  &.visible {
    border-radius: 50%;
   height: 10vh;
   width: 10vh;
   background-color: #0925ff;
   color: white;
   border: white solid 2px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 2px;
  }
`
export const ButtonP = styled.p`
  font-size: 40px;
  font-family: 'Baloo 2', cursive;
  padding: 5px;
`

export const AddButton = styled.button`
  position: absolute;
  right: 5px;
  bottom: 5px;
  border-radius: 10px;
  background-color: #0925ff;
  padding: 3px;
  color: white;
  font-family: 'Baloo 2', cursive;
  border: none;
  &:hover {
    background-color: lightblue;
  }
  `

export const RemoveTask = styled.button`
background-color: transparent;
border: none;
&:hover {
    transform: scale(1.3);
}
`