import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { todos } from '../reducers/todos'

const StyledTodoItem = styled.div`
  background-color: #21274e;
  padding: 10px;
  margin: 10px 0;
  font-size: 20px;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 3px 4px 0 rgba(0, 0, 0, 0.15);
`

const StyledTaskContainer = styled.div`
  display: flex;
  align-items: center;
`

const StyledSection = styled.section`
  max-width: 400px;
  margin: auto;
`

const StyledButton = styled.button`
  background: transparent;
  border: none;
  color: #9aaedb;
  font-size: 16px;
  margin-right: 5px;
`

const StyledParagraph = styled.p`
  font-size: 16px;
  margin: 0;
  color: white;
`

export const TodosBusiness = () => {
  const businessItems = useSelector((store) =>
    store.todos.items.filter((item) => item.category === 'business')
  )

  const dispatch = useDispatch()

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id))
  }

  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id))
  }

  const checkedLine = (item) => {
    if (item.isComplete === true) {
      return 'line-through'
    } else {
      return 'none'
    }
  }

  return (
    <StyledSection>
      {businessItems.map((item) => (
        // <TodoItem key={item.id} item={item} />
        <StyledTodoItem key={item.id}>
          <StyledTaskContainer>
            <label className="container">
              <input
                type="checkbox"
                checked={item.isComplete}
                onChange={() => onToggleTodo(item.id)}
              />
              <div className="checkmark"></div>
            </label>
            <StyledParagraph style={{ textDecoration: checkedLine(item) }}>
              {item.text}
            </StyledParagraph>
          </StyledTaskContainer>
          <StyledButton onClick={() => onDeleteTodo(item.id)}>
            <i className="far fa-trash-alt"></i>
          </StyledButton>
        </StyledTodoItem>
      ))}
    </StyledSection>
  )
}
