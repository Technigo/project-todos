import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'

import todos from '../reducers/todos'
import { Container, Header } from '../styling/GlobalStyles'

const TodoWork = () => {
  const allTodos = useSelector((store) => store.todos)
  const justWorkTodos = allTodos.items.filter((item) => item.category === "Work")

  const dispatch = useDispatch()

  return (
    <Container>
      <Header>Work</Header>
      {justWorkTodos.map(todo => (
        <div key={todo.id}>
          <p>{todo.description}</p>
          <input
            type="checkbox"
            checked={todo.isComplete}
            onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
          />
          <p className="completed-time"> 
            {moment(todo.createdAt).format('LT, MMMM Do YYYY')}
          </p>
          <ToggleTodo
            type="button"
            onClick={() => dispatch(todos.actions.removeToDo(todo.id))}>
              <TrashIcon src="assets/delete.svg"></TrashIcon>
          </ToggleTodo>
        </div>
      ))}
    </Container>
  )
}

// Local styles
const ToggleTodo = styled.button`
  background-color: transparent; 
  border: none; 
`;

const TrashIcon = styled.img`

`;

export default TodoWork