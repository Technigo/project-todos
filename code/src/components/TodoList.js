import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { todos, filteredTodos } from '../reducers/todos'

export const TodoList = () => {
  const dispatch = useDispatch()
  const items = useSelector((store) => store.todos.items)
  const itemsFiltered = useSelector((store) => filteredTodos(store))
  const itemsCategory = useSelector((store) => store.todos.filter)
  const itemsChecked = useSelector(
    (store) => store.todos.items.filter((item) => item.isComplete).length
  )
  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id))
  }
  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id))
  }
  const checkedLine = (todo) => {
    if (todo.isComplete) {
      return 'line-through'
    } else {
      return 'none'
    }
  }
  const categoryColor = (category) => {
    if (category === 'business') {
      return '2px solid dodgerblue'
    } else if (category === 'shopping') {
      return '2px solid limegreen'
    } else {
      return '2px solid tomato'
    }
  }
  const startText = () => {
    if (items.length) {
      return 'none'
    }
  }

  return (
    <StyledSection>
      <StyledSmallHeadline>
        Checked to-dos: {itemsChecked}/{items.length}
        <ProgressbarWrapperStyled>
          <div
            className="progress"
            style={{ width: `${itemsChecked * (100 / items.length)}%` }}></div>
        </ProgressbarWrapperStyled>
      </StyledSmallHeadline>
      <StyledSmallHeadline className="category">
        {itemsCategory}
      </StyledSmallHeadline>
      <StyledStartText style={{ display: startText() }}>
        No to-dos today?
      </StyledStartText>
      <section>
        {itemsFiltered.map((todo) => (
          // <StyledTodoItem key={item.id} className={item.category}>
          <StyledTodoItem key={todo.id}>
            <StyledTaskContainer>
              <label className="container">
                <input
                  type="checkbox"
                  checked={todo.isComplete}
                  onChange={() => onToggleTodo(todo.id)}
                />
                <div
                  className="checkmark"
                  style={{ border: categoryColor(todo.category) }}></div>
              </label>
              <StyledParagraph style={{ textDecoration: checkedLine(todo) }}>
                {todo.text}
              </StyledParagraph>
            </StyledTaskContainer>
            <StyledButton onClick={() => onDeleteTodo(todo.id)}>
              <i className="far fa-trash-alt"></i>
            </StyledButton>
          </StyledTodoItem>
        ))}
      </section>
    </StyledSection>
  )
}

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

  .category {
    color: white;
    font-size: 20px;
    margin: 0;
    height: 40px;
  }
`

const StyledButton = styled.button`
  background: transparent;
  border: none;
  color: #9aaedb;
  font-size: 16px;
  margin-right: 5px;
`
const StyledSmallHeadline = styled.h3`
  height: 40px;
  color: #9aaedb;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  margin: 10px 0 0 0;
  line-height: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledStartText = styled.p`
  font-size: 25px;
  line-height: 1.3;
  font-weight: 300;
  color: white;
  width: 80%;
`

const StyledParagraph = styled.p`
  font-size: 16px;
  margin: 0;
  color: white;

  .moment {
    font-size: 12px;
    color: #9aaedb;
    text-decoration: none !important;
  }
`
const ProgressbarWrapperStyled = styled.div`
  height: 8px;
  width: 30%;
  overflow: hidden;
  border: 1px solid #9aaedb;
  border-radius: 10px;
  display: flex;

  .progress {
    background-color: #9aaedb;
    height: 100%;
    transition: 0.3s ease-out;
  }
`
