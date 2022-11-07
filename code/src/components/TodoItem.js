/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import styled from 'styled-components/macro'
import moment from 'moment'

const TodoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledSingleTodo = styled.label`
  cursor: pointer;
  font-family: 'Gaegu', cursive;
  background: transparent;
  border: none;

  text-decoration: ${(props) => (props.isDone ? 'line-through' : 'none')};
  &:hover {
    font-weight: bold;
  }
  `

const RemoveButton = styled.button`
  cursor: pointer;
  font-family: 'Gaegu', cursive;
  background: transparent;
  border: none;
  font-size: 120%;
  font-weight: bold;

  &:hover {
    font-weight: bold;
  }
`

const TodoText = styled.p`
  margin-bottom: 2px;
`

const DateString = styled.div`
  font-size: 80%;
`

const TodoItem = ({ todo, index, onDelete, onDone }) => {
  return (
    <TodoWrapper>

      <StyledSingleTodo key={todo.id} isDone={todo.isDone} onClick={() => onDone(todo.id)}>
        <TodoText>{todo.text}</TodoText>
        <DateString>Added {moment(todo.createdAt).format('HH:mm on MMM Do -YY')}</DateString>
      </StyledSingleTodo>

      <RemoveButton
        onClick={() => onDelete(index)}
        tyDateStringe="button"
        style={{
          textDecoration: 'none'
        }}>X
      </RemoveButton>

    </TodoWrapper>
  )
}
export default TodoItem