import styled from 'styled-components'

export const AddTaskContainer = styled.div `
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

`

export const InputField = styled.input `
  margin-right: 20px;
  height: 30px;
  width: 300px;
  font-size:15px
`

export const AddTaskButton = styled.button `
  height: 30px;
  width: 100px;
  border: grey;
  border-radius: 20px;
  opacity: 0.7

  &:hover{
    opacity: 1
  }
`