/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
import styled from 'styled-components'

export const TodoList = () => {
  const allTodos = useSelector((store) => store.todos.items)
  const dispatch = useDispatch();

  const onCompletedToggle = (id) => {
    dispatch(todos.actions.toggleItem(id))
  }

  return (
    <TodoListWrapper>
      {allTodos.map((singleTodo) => {
        return (
          <TodoItem>
            <label htmlFor="to-dos"> {singleTodo.name} </label>
            <label>Completed
              <input
                name="to-do"
                id="todos"
                type="checkbox"
                checked={singleTodo.completed}
                onChange={() => onCompletedToggle(singleTodo.id)} />
            </label>
            <RemoveTask type="button">❌</RemoveTask>
          </TodoItem>
        );
      })}
    </TodoListWrapper>
  )
}

const TodoListWrapper = styled.section`
  margin: 30px;
  background-color: #D3E4CD;
  border-radius: 10px;
  margin-top: 5vh;
  height: 60vh;
`

const TodoItem = styled.div`
  margin: 8px;
  padding: 8px;
  background-color: #FEF5ED;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
`

const RemoveTask = styled.button`
    background-color: transparent;
    border: none;
    &:hover {
        transform: scale(1.2);
        cursor: pointer;
    }
    `