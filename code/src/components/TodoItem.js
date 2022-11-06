/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components/macro'
import moment from 'moment'

const TodoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledSingleTodo = styled.label`
    align-items: center;
    cursor: pointer;

    text-decoration: ${(props) => (props.isDone ? 'line-through' : 'none')};
    &:hover {
    font-weight: bold;
  }
  `

const RemoveButton = styled.button`
  font-size: 120%;
  font-weight: bold;

  &:hover {
    font-size: 150%;
  }
`

const TodoText = styled.p`
  margin-bottom: 0;
`

const DateString = styled.div`
  font-size: 80%;
`

const TodoItem = ({ todo, index, onDelete, onDone }) => {
  return (
    <TodoWrapper>

      <StyledSingleTodo key={todo.id} isDone={todo.isDone} onClick={() => onDone(todo.id)}>
        <TodoText>{todo.text}</TodoText>
        <DateString>{moment(todo.createdAt).format('YYYY-MM-DD HH:mm:ss')}</DateString>
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