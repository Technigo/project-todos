import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { format } from 'date-fns'
import Checkbox from '@material-ui/core/Checkbox'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'

import todos from '../reducers/todos'
import { Container, Header, CheckboxContainer, TodoList, TodoDescription } from '../styling/GlobalStyles'

const TodoHome = () => {
  const allTodos = useSelector((store) => store.todos)
  const justHomeTodos = allTodos.items.filter((item) => item.category === "Home")

  const dispatch = useDispatch()

  return (
    <Container>
      <Header>Home</Header>
      <TodoList>
        {justHomeTodos.map(todo => (
          <CheckboxContainer key={todo.id}>
            <Checkbox
              checked={todo.isComplete}
              onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
              color="default"
            />
            <TodoDescription>{todo.description}</TodoDescription>
            <p>{format(new Date(), 'MMMM do yyyy')}</p>
            <DeleteOutlinedIcon 
              onClick={() => dispatch(todos.actions.removeToDo(todo.id))} />
          </CheckboxContainer>
        ))}
      </TodoList>
    </Container>
  )
}

export default TodoHome