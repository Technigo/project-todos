import styled from 'styled-components'

export const TaskContainer = styled.label`
  display:flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  
`

export const TaskText = styled.p `
  padding: 0 20px;
  font-weight: 700
`

export const Button = styled.button`
  border: 2px solid grey;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  opacity: 0.8;

  &:hover {
    border: 2px solid #164B60;
    opacity: 1
  }
`

export const Time = styled.div`
  text-align: right;
  font-weight: 600;
  font-size: 14px
`