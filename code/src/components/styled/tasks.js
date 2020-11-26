import styled from 'styled-components'

export const TaskContainer = styled.label`
  display:flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  
`

export const TaskText = styled.p `
  padding: 0 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
`

export const Button = styled.button`
  border: 1px solid grey;
  height: 30px;
  width: 30px;
  border-radius: 20px;
  opacity: 0.8;

  &:hover {
    border: 2px solid red;
    opacity: 1
  }
`