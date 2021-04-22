import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import todos from '../reducers/todos'

const TodoStudies = () => {
  const allTodos = useSelector((store) => store.todos)
  const justStudiesTodos = allTodos.items.filter((item) => item.category === "Studies")

  const dispatch = useDispatch()

  // this one clears all instead of just clearing studies - can a payload look like this? 
  const onClearAll = () => {
    dispatch(todos.actions.removeAllTodos(todos.category === 'Studies'))
  }

  return (
    <Container>
      <Header>Studies</Header>
      {justStudiesTodos.map(todo => (
        <div key={todo.id}>
          <StudiesTodo>{todo.description}</StudiesTodo>
        </div>
      ))}
      <RemoveAllButton
        type="button"
        onClick={onClearAll}>
          <Delete src="assets/delete.svg">
          </Delete>
      </RemoveAllButton>
      <div>
      Clear all
      </div>
    </Container>
  )
}

// Local styles
const Container = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center; 
  flex-direction: column;
`;

const Header = styled.h1`
  font-size: 20px; 
  text-transform: uppercase;
  color: #deacff;
`;

const StudiesTodo = styled.p`
  font-size: 16px; 
`;

const RemoveAllButton = styled.button`
  width: 40px;
  height: 40px;
  border: none; 
  /* background-color: transparent; */
`;

const Delete = styled.img`
  margin: 0;
`; 

export default TodoStudies