import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { format } from 'date-fns'
import Checkbox from '@material-ui/core/Checkbox'

import todos from '../reducers/todos'
import { Container, Header, DeleteButton, CheckboxContainer, TodoList, TrashIcon } from '../styling/GlobalStyles'

const TodoStudies = () => {
  const allTodos = useSelector((store) => store.todos)
  const justStudiesTodos = allTodos.items.filter((item) => item.category === "Studies")

  const dispatch = useDispatch()

  return (
    <Container>
      <Header>Studies</Header>
      <TodoList>
        <CheckboxContainer>
        {justStudiesTodos.map(todo => (
          <div key={todo.id}>
            <Checkbox
              checked={todo.isComplete}
              onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
              color="default"
            />
            {todo.description}
            {format(new Date(), 'MMMM do yyyy')}
            <DeleteButton
              type="button"
              onClick={() => dispatch(todos.actions.removeToDo(todo.id))}>
                <TrashIcon src="assets/delete.svg"></TrashIcon>
            </DeleteButton>
          </div>
        ))}
        </CheckboxContainer>
      </TodoList>
    </Container>
  )
}

export default TodoStudies