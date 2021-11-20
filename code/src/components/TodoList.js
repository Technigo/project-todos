import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { todos, filteredTodos } from '../reducers/todos'
import { EmptyList } from './EmptyList'
import { Progress } from './Progress'
import { ReactComponent as Overlay } from '../assets/overlay.svg'

export const TodoList = () => {
  const dispatch = useDispatch()
  const items = useSelector((store) => store.todos.items)
  const itemsFiltered = useSelector((store) => filteredTodos(store))
  const itemsCategory = useSelector((store) => store.todos.filter)

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
  const categoryColor = (item) => {
    if (item === 'business') {
      return '2px solid dodgerblue'
    } else if (item === 'shopping') {
      return '2px solid limegreen'
    } else {
      return '2px solid tomato'
    }
  }

  return (
    <>
      {!items.length && (
        <StyledSection>
          <EmptyList />
        </StyledSection>
      )}
      {items.length && (
        <StyledSection>
          <Progress />
          <StyledSmallHeadline className="category">
            To-do list / {itemsCategory}
          </StyledSmallHeadline>

          <section>
            {itemsFiltered.map((item) => (
              <StyledTodoItem key={item.id}>
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
                  <StyledParagraph
                    style={{ textDecoration: checkedLine(item.category) }}>
                    {item.text}
                  </StyledParagraph>
                </StyledTaskContainer>
                <StyledButton onClick={() => onDeleteTodo(item.id)}>
                  <i className="far fa-trash-alt"></i>
                </StyledButton>
              </StyledTodoItem>
            ))}
          </section>
        </StyledSection>
      )}
      <StyledOverlay />
    </>
  )
}

const StyledTodoItem = styled.div`
  background-color: #21274e;
  padding: 10px;
  margin: 10px 0;
  font-size: 20px;
  border-radius: 12px;
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
    font-size: 17px;
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
  height: 25px;
  color: #9aaedb;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  margin: 0;
  margin-bottom: 10px;
  line-height: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
const StyledOverlay = styled(Overlay)`
  width: 100%;
  z-index: 10;
  position: fixed;
  bottom: 0;
`
