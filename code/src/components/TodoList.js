import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { todos, filteredTodos } from '../reducers/todos'

// import { TodoItem } from './TodoItem'

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
  const checkedLine = (item) => {
    if (item.isComplete) {
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
        Completed: {itemsChecked}/{items.length}
        {/* Your to-do's ({Math.round(itemsChecked * (100 / items.length))}% done) */}
        {/* Your to-do's ({itemsChecked} done, {itemsUnchecked} to go) */}
        <ProgressbarWrapperStyled>
          <div
            className="progress"
            style={{ width: `${itemsChecked * (100 / items.length)}%` }}></div>
        </ProgressbarWrapperStyled>
      </StyledSmallHeadline>
      <StyledSmallHeadline>{itemsCategory}</StyledSmallHeadline>
      <StyledStartText style={{ display: startText() }}>
        No to-dos today?
      </StyledStartText>
      {itemsFiltered.map((item) => (
        // <TodoItem key={item.id} item={item} />
        <StyledTodoItem key={item.id} className={item.category}>
          <StyledTaskContainer>
            <label className="container">
              <input
                type="checkbox"
                checked={item.isComplete}
                onChange={() => onToggleTodo(item.id)}
              />
              <div
                className="checkmark"
                style={{ border: categoryColor(item.category) }}></div>
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
  margin: 30px 0 10px;
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
  width: 35%;
  overflow: hidden;
  /* background-color: #21274e; */
  border: 1px solid #9aaedb;
  border-radius: 10px;
  display: flex;

  .progress {
    background-color: #9aaedb;
    height: 100%;
    transition: 0.3s ease-out;
  }
`
