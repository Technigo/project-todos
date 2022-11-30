/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import styled from 'styled-components/macro'
import moment from 'moment'

const TodoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
`

const StyledSingleTodo = styled.p`
  cursor: pointer;
  font-family: 'Gaegu', cursive;
  background: transparent;
  border: none;
  overflow-wrap: anywhere;
  text-decoration: ${(props) => (props.isDone ? 'line-through' : 'none')};
  margin:0;
  `

const RemoveButton = styled.button`
  cursor: pointer;
  font-family: 'Gaegu', cursive;
  background: transparent;
  border: none;
  font-size: 120%;
  font-weight: bold;
  text-decoration: none;
  padding:0;
`

const TodoText = styled.p`
  margin-bottom: 1px;
`

const DateString = styled.div`
  font-size: 80%;
`

const TodoItem = ({ todo, index, onDelete, onDone }) => {
  return (
    <TodoWrapper>
      <StyledSingleTodo
        onClick={() => onDone(todo.id)}
        key={todo.id}
        isDone={todo.isDone}>
        <TodoText>{todo.text}</TodoText>
        <DateString>Added {moment(todo.createdAt).format('HH:mm on D MMM YYYY')}</DateString>
      </StyledSingleTodo>
      <RemoveButton
        onClick={() => onDelete(index)}
        type="button"
        title="Delete task">X
      </RemoveButton>
    </TodoWrapper>
  )
}
export default TodoItem