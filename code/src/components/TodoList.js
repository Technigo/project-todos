/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import todo from 'reducers/todo'
import styled from 'styled-components'
import { Section } from './styling/Wrappers'

const TodoList = () => {
  const dispatch = useDispatch()
  const todoList = useSelector((store) => store.todo.items)

  const onIsCompletedToggle = (id) => {
    dispatch(todo.actions.toggleItem(id))
  }

  const onDeleteButtonClick =
  (todoIndex) => {
    dispatch(todo.actions.deleteItem(todoIndex))
  }

  return (
    <Section>
      {todoList.map((singleTodo, index) => {
        return (
          <ArticleWrapper key={singleTodo.id}>
            <TodoWrapper>
              <h2>{singleTodo.name}</h2>
              <label>
                <CheckBox
                  type="checkbox"
                  checked={singleTodo.isCompleted}
                  onChange={() => onIsCompletedToggle(singleTodo.id)} />
              </label>
            </TodoWrapper>
            <DeleteButton
              onClick={() => onDeleteButtonClick(index)}
              type="button">&#128465;&#65039;
            </DeleteButton>
          </ArticleWrapper>
        )
      })}
    </Section>
  )
}

const ArticleWrapper = styled.article`
  display: flex;
  justify-content: space-around;
  padding: 10px;
`
const TodoWrapper = styled.div`
  display: flex;
  width: 70%;
  padding-left: 25px;
  justify-content: space-between;
  h2{
  font-size: 20px;
  }
  @media (max-width: 668px){
    padding-left: 5px;
    h2{
      font-size: 15px;
    }
  }
`
const DeleteButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: lightgrey;
  border: none;
  border-radius: 50%;
  margin-top: 5px;
  @media (max-width: 668px){
    width: 35px;
    height: 35px;
  }
`
const CheckBox = styled.input`
  cursor: pointer;
  appearance: none;
  margin: 5px;
  margin-right: -42px;
  font: inherit;
  color: white;
  width: 2em;
  height: 2em;
  border: 0.15em solid yellow;
  margin-top: 15px;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  &::before {
    content: '';
    width: 1em;
    height: 1em;
    transform: scale(0);
    border-radius: 50%;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em yellow;
  }
  &:checked::before {
    transform: scale(1);
  }
  @media (max-width: 668px){
    margin-right: 10px;
    width: 1em;
    height: 1em;
  }
`
export default TodoList