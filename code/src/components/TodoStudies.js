import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import styled from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox'

import todos from '../reducers/todos'
import { Container, Header } from '../styling/GlobalStyles'

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
            <p>{todo.description}</p>
            <p className="completed-time"> 
              {moment(todo.createdAt).format('LT, MMMM Do YYYY')}
            </p>
            <ToggleTodoButton
              type="button"
              onClick={() => dispatch(todos.actions.removeToDo(todo.id))}>
                <TrashIcon src="assets/delete.svg"></TrashIcon>
            </ToggleTodoButton>
          </div>
        ))}
        </CheckboxContainer>
      </TodoList>
    </Container>
  )
}

// Local styles 
const TodoList = styled.ul`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  margin: 5px 0 5px 0;
  justify-content: space-between;
  border-radius: 5px;
  border: 1 px solid #793dfc;
  padding: 10px 0 10px 0;
  background-color: whitesmoke;
  list-style: none;
`;

const CheckboxContainer = styled.div`
  justify-content: flex-start;
  display: flex;
  flex-direction: row;
  align-items: center; 
`;
/* const StudiesList = styled.p`

`;
 */
const ToggleTodoButton = styled.button`
  background-color: transparent; 
  border: none; 
`;

const TrashIcon = styled.img`
  
`;

export default TodoStudies