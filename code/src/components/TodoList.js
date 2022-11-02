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
            <label>
              <input
                name="to-do"
                id="todos"
                type="checkbox"
                checked={singleTodo.completed}
                onChange={() => onCompletedToggle(singleTodo.id)} />
            </label>
            <RemoveTask onClick={() => dispatch(todos.actions.removeItem(singleTodo.id))} type="button">Remove ❌</RemoveTask>
          </TodoItem>
        );
      })}
    </TodoListWrapper>
  )
}

const TodoListWrapper = styled.section`
  margin: 30px;
  background-color: #ECB390;
  border-radius: 10px;
  margin-top: 50px;
  height: 60vh;
`

const TodoItem = styled.div`
  margin: 8px;
  padding: 18px;
  background-color: #FEF5ED;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
 
  @media (min-width: 668px){ 
    justify-content: space-between;
  }
`

const RemoveTask = styled.button`
    background-color: transparent;
    border: none;
    &:hover {
        transform: scale(1.2);
        cursor: pointer;
    }
    `

//  display: grid;
// grid-template-columns: 1fr 4fr 1fr;