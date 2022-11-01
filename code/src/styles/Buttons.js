import styled from 'styled-components'

export const NewTodoButton = styled.button`
  border-radius: 50%;
  height: 44px;
  width: 44px;
  background-color: blue;
  color: white;
  border: white solid 1px;
  display: flex;
  align-items: center;
  margin: 2px;
  &:hover {
    transform: scale(1.2);
  }
`
export const ButtonP = styled.p`
  font-size: 40px;
  font-family: 'Baloo 2', cursive;
  padding: 5px;
`