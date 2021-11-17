import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { todos } from '../reducers/todos'

// import { TodoItem } from './TodoItem'

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
const StyledSmallHeadline = styled.h3`
  color: #9aaedb;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  margin: 20px 0;
  border-bottom: 1px solid;
  line-height: 3;
`

const StyledStartText = styled.p`
  font-size: 25px;
  line-height: 1.3;
  font-weight: 300;
  /* text-align: center; */
  /* margin: 70px auto; */
  color: white;
  width: 80%;
`

const StyledParagraph = styled.p`
  font-size: 16px;
  margin: 0;
  color: white;
`

export const TodoList = () => {
  const items = useSelector((store) => store.todos.items)

  const dispatch = useDispatch()

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id))
  }

  // v1 Mutability approach
  // const onDeleteTodo = (index) => {
  //   dispatch(todos.actions.deleteTodo(index))
  // }

  // v2 Immutability approach
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
      <StyledSmallHeadline>Your list of todos</StyledSmallHeadline>
      <StyledStartText>Add some todos to get started!</StyledStartText>
      {items.map((item) => (
        // <TodoItem key={item.id} item={item} />
        <StyledTodoItem key={item.id}>
          <StyledTaskContainer>
            {/* <input
              type="checkbox"
              checked={item.isComplete}
              onChange={() => onToggleTodo(item.id)}
            />
            <div className="cntr">
              <input
                type="checkbox"
                checked={item.isComplete}
                onChange={() => onToggleTodo(item.id)}
                id="cbx"
                className="hidden-xs-up"
              />
              <label htmlFor="cbx" className="cbx"></label>
            </div> */}
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
